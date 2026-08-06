import { createInterface } from "node:readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
})

// console.log(rl);

class Animal {
  constructor(name, species, symbol) {
    this.name = name;
    this.species = species;
    this.symbol = symbol;
  }
}

class Tiger extends Animal {
  constructor(name, species, symbol) {
    super(name, species, symbol);
  }
}

class Elephant extends Animal {
  constructor(name, species, symbol) {
    super(name, species, symbol);
  }
}

class Wolf extends Animal {
  constructor(name, species, symbol) {
    super(name, species, symbol);
  }
}

class Rhino extends Animal {
  constructor(name, species, symbol) {
    super(name, species, symbol);
  }
}

class Visitor {
  constructor(name) {
    this.name = name;
    this.position = 0;
  }
  moveLeft() {
    if (this.position > 0) {
      this.position -= 1;
      return `${this.name} walks to the Left....`;
    }
    else {
      return `${this.name} is already at the Entrance.`;
    }
  }
  moveRight(maximumEnd) {
    if (this.position < maximumEnd) {
      this.position += 1;
      return `${this.name} walks to the Right....`;
    }
    else {
      return `${this.name} is already at the end of the Zoo Path.`;
    }
  }
}

const animals = [
  new Tiger("Mufasa", "Panthera tigris corbetti", "🐯"),
  new Elephant("Kankluay", "Elephas maximus", "🐘"),
  new Wolf("Logan", "Canis lupus", "🐺"),
  new Rhino("Rad", "Rhinocerotidae", "🦏"),
];
const zooPath = [
  {
    symbol: "🚪",
    name: "Entrance",
    description:
      "The main entrance to the zoo. The morning visitors are arriving.",
  },
  {
    symbol: animals[0].symbol,
    name: "Tiger enclosure",
    animal: animals[0],
  },
  {
    symbol: "🌳",
    name: "Garden",
    description: "A quiet garden with large trees and shaded benches.",
  },
  {
    symbol: animals[1].symbol,
    name: "Elephant enclosure",
    animal: animals[1],
  },
  {
    symbol: animals[2].symbol,
    name: "Wolf",
    animal: animals[2],
  },
  {
    symbol: animals[3].symbol,
    name: "Rhino",
    animal: animals[3],
  },
  {
    symbol: "🍽️",
    name: "Food court",
    description: "The food court smells like popcorn and fresh fruit.",
  },
];

const zooName = "JSD13 Nate Zoo";
const visitors = new Visitor("Nate");



function askForCommand() {
  rl.question(
    "\n[l] Left | [r] Right | [i] Inspect | [d] Directory | [q] Quit\n> ",
    (answer) => {
      const command = answer.trim().toLowerCase();

      if (command === "q") {
        console.log("\nThank you for visiting the JS Terminal Zoo.");
        rl.close();
        return;
      }
      console.clear();
      handleCommand(command);
      displayZoo();
      askForCommand();
    }
  )
}

function handleCommand(command) {
  if (command === "l") {
    console.log(visitors.moveLeft());
  }
  else if (command === "r") {
    console.log(visitors.moveRight(zooPath.length - 1));
  }
  else if (command === "i") {
    inspectLocation();
  }
  else if (command === "d") {
    showZooDirectory();
  }
  else { console.log("Please Enter l, r, i, d, or q") }
  
}

function showZooDirectory() {
  console.log("Zoo Directory");
  console.table(animals);
}

function displayZoo() {
  console.log("\n--- JSD13 Nate Zoo ---");

  const zooMap = zooPath.map(item => item?.symbol).join(" - ");
  console.log(zooMap);

  let currentVisiorPath = [];
  for (let p = 0; p < zooPath.length; p++) {
    if (p === visitors.position) {
      currentVisiorPath.push("👨")
    } else {
      currentVisiorPath.push("⚪")
    }
  }
  console.log(currentVisiorPath.join(" - "));

}

function inspectLocation() {
  
const currentPlace = zooPath[visitors.position];
console.log (`\nYou are at >>> ${currentPlace.name}`);
  if (currentPlace.description){
    console.log(currentPlace.description);
  } else if (currentPlace.animal){
    console.log(currentPlace.animal);
  }
}
function prepareAnimalFood() {

}
console.clear();
console.log(`Welcome to the ${zooName} Explorer.`);
showZooDirectory();
displayZoo();
inspectLocation();
prepareAnimalFood();
askForCommand();