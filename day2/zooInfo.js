
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

export default {
    animals,
    zooPath,
}