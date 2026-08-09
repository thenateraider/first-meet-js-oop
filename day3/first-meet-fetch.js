const url = "https://pokeapi.co/api/v2/pokemon/pikachu";

async function getPost() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }   catch(err){
        console.error("Something went wrong", err)
    }
}

getPost();