
process.loadEnvFile();
const base_url = "https://api.api-ninjas.com/v1/animals";

async function searchAnimal(searchname) {
    try {
        // 1. กำหนด Query parameter ?name= และนำไปผสม
        // 2. ใช้ base_url เพื่อเป็น URL ตั้งต้น ส่วนของการค้นหาจะใช้ ?name
        // 3. จัดโครงสร้างวงเล็บ fetch() ให้ถูกต้อง
        const response = await fetch(`${base_url}?name=${encodeURIComponent(searchname)}`, {
            headers: {
                'X-Api-Key': process.env.APININJA_KEY
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const rawData = await response.json();
        const tableData = rawData;
        return tableData;

    } catch (err) {
        console.error("Something went wrong", err);
    }
}


function askForTableIndex(rl, zoo, displayZoo, askForCommand, resultTable, selectedClassKey) {
    rl.question(
        "\nSelect Animal You Want to Add(Index) or [x] to cancel >> ",
        (selectedanimalindex) => {
            const selectedIdxInput = selectedanimalindex.trim().toLowerCase();

            if (selectedIdxInput === 'x') {
                console.log("Cancelled.");
                displayZoo();
                return askForCommand();
            }

            const index = parseInt(selectedIdxInput, 10);

            if (!isNaN(index) && index >= 0 && index < resultTable.length) {
                const apiData = resultTable[index];
                const AnimalClass = zoo.availableClasses[selectedClassKey];

                const defaultSymbol = new AnimalClass().symbol;

                const newAnimalInstance = new AnimalClass(
                    apiData.name,
                    apiData.taxonomy?.scientific_name || selectedClassKey,
                    defaultSymbol
                );

                console.log("\nAdded to Zoo:");
                console.table([newAnimalInstance]);

                zoo.addToZoo(newAnimalInstance);
                displayZoo();
                askForCommand();
            } else {
                console.log("Index not correct, please try again.");
                askForTableIndex(rl, zoo, displayZoo, askForCommand, resultTable, selectedClassKey);
            }
        }
    );
}

function askForClass(rl, zoo, displayZoo, askForCommand, availableKeys) {
    rl.question(
        "\nSelect Animal Class (Index) or [x] to cancel >> ",
        async (input) => {
            const trimmedInput = input.trim().toLowerCase();

            if (trimmedInput === 'x') {
                console.log("Cancelled.");
                displayZoo();
                return askForCommand();
            }

            let selectedClassKey = "";
            const inputIndex = parseInt(trimmedInput, 10) - 1;

            if (!isNaN(inputIndex) && inputIndex >= 0 && inputIndex < availableKeys.length) {
                selectedClassKey = availableKeys[inputIndex];
            } else if (availableKeys.includes(trimmedInput)) {
                selectedClassKey = trimmedInput;
            } else {
                console.log(`Invalid choice! Choose index (1-${availableKeys.length}) or [x] to cancel`);
                return askForClass(rl, zoo, displayZoo, askForCommand, availableKeys);
            }

            console.log(`\nSearching API for: ${selectedClassKey}...`);
            const resultTable = await searchAnimal(selectedClassKey);

            if (!resultTable || resultTable.length === 0) {
                console.log("Animal Not Found from API");
                displayZoo();
                return askForCommand();
            }

            console.clear();
            console.log(`\nResults for "${selectedClassKey}":`);
            console.table(resultTable);

            askForTableIndex(rl, zoo, displayZoo, askForCommand, resultTable, selectedClassKey);
        }
    );
}


function addAnimalInZoo(rl, zoo, displayZoo, askForCommand) {
    const availableKeys = Object.keys(zoo.availableClasses || {});

    if (availableKeys.length === 0) {
        console.log("No available animal classes found.");
        displayZoo();
        return askForCommand();
    }

    console.log("\n---------------------------------");
    console.log("  Available Animal Classes");
    console.log("---------------------------------");
    availableKeys.forEach((className, idx) => {
        console.log(` [${idx + 1}] ${className.toUpperCase()}`);
    });
    console.log("---------------------------------");

    askForClass(rl, zoo, displayZoo, askForCommand, availableKeys);
}

export default {
    searchAnimal,
    addAnimalInZoo
};