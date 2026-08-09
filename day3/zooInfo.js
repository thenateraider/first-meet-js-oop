
class Animal {
  constructor(name, species, symbol) {
    this.name = name;
    this.species = species;
    this.symbol = symbol;
  }
}

class Tiger extends Animal {
  constructor(name, species) {
    super(name, species);
    this.symbol ="🐯";
  }
}

class Elephant extends Animal {
  constructor(name, species) {
    super(name, species);
    this.symbol="🐘";
  }
}

class Wolf extends Animal {
  constructor(name, species) {
    super(name, species);
    this.symbol="🐺";
  }
}

class Rhino extends Animal {
  constructor(name, species) {
    super(name, species);
    this.symbol="🦏";
  }
}


let animals = [
  new Tiger("Mufasa", "Panthera tigris corbetti"),
  new Elephant("Kankluay", "Elephas maximus"),
  new Wolf("Logan", "Canis lupus"),
  new Rhino("Rad", "Rhinocerotidae"),
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
const availableClasses = {
  tiger: Tiger,
  elephant: Elephant,
  wolf: Wolf,
  rhino: Rhino
};

function addToZoo(newAnimal) {
  animals.push(newAnimal);

  //ดึง Food Court ออกมาจากท้าย Array ชั่วคราวเพื่อเพิ่มห้องสัตว์ใหม่ไปแทรก
  const foodCourt = zooPath.pop();

  // push สัตว์ตัวใหม่ลงไป
  zooPath.push({
    symbol: newAnimal.symbol,
    name: `${newAnimal.name} enclosure`,
    animal: newAnimal
  });

  //push Food Court กลับเข้าปิดท้าย
  zooPath.push(foodCourt);
}
export default {
    animals,
    zooPath,
    addToZoo,
    availableClasses
}