
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
        this.hunger = 50;
    }

    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }

    eat() {
        this.hunger = Math.max(0, this.hunger - 10);
        console.log(`${this.name} the ${this.species} ate. Hunger level is now ${this.hunger}.`);
    }
}


class Mammal extends Animal {
    constructor(name, species, furColor) {
        super(name, species);
        this.furColor = furColor;
    }

    groom() {
        console.log(`${this.name} is carefully brushing their ${this.furColor} fur.`);
    }

    play() {
        console.log(`${this.name} the ${this.species} is happily rolling around and playing with zookeepers.`);
    }
}

class Birds extends Animal {
    constructor(name, species, wingspan) {
        super(name, species);
        this.wingspan = wingspan;
    }

    makeSound() {
        console.log(`${this.name} chirps: Tweet! Tweet! Echoing across the park.`);
    }

    flyPatrol() {
        console.log(`${this.name} spreads their ${this.wingspan} wings and patrols the high sky above the zoo.`);
    }
}

class Reptile extends Animal {
    constructor(name, species, isVenomous) {
        super(name, species);
        this.isVenomous = isVenomous;
    }

    baskInSun() {
        console.log(`${this.name} the ${this.species} stretches out on a flat rock, basking under the warm sun.`);
    }

    camouflage() {
        console.log(`${this.name} shifts skin pigment to blend into the surrounding green leaves.`);
    }
}

class Mutant extends Animal {
    constructor(name, species, mutantPower) {
        super(name, species);
        this.mutantPower = mutantPower;
    }

    usePower() {
        console.log(`${this.name} unleashes mutant power: [${this.mutantPower}]!`);
    }

    makeSound() {
        console.log(`${this.name} shouts proudly: "I'm back baby!"`);
    }

    guardZoo() {
        console.log(`${this.name} stands at the entrance gate, keeping the zoo safe from villains.`);
    }
}

class AquaticAnimal extends Animal {
    constructor(name, species, swimmingDepth) {
        super(name, species);
        this.swimmingDepth = swimmingDepth;
    }

    swim() {
        console.log(`${this.name} dives gracefully down to ${this.swimmingDepth}.`);
    }

    waterShow() {
        console.log(`${this.name} leaps high out of the water, splashing all the excited tourists.`);
    }
}


const leo = new Mammal("Leo", "Lion", "Golden");
const baloo = new Mammal("Baloo", "Bear", "Brown");
const zazu = new Birds("Zazu", "Hornbill", "2 feet");
const pascal = new Reptile("Pascal", "Chameleon", false);
const wolverine = new Mutant("Logan", "Human/Mutant - X-MEN", "Adamantium Claws & Healing Factor");
const nemo = new AquaticAnimal("Nemo", "Clownfish", "20 meters");


console.log("=== PART 1: MORNING ROUTINE ===");
console.log("The sun rises over the zoo, and the day begins.");
zazu.makeSound();
zazu.flyPatrol();
pascal.baskInSun();
baloo.groom();
wolverine.guardZoo();

console.log("\n=== PART 2: AFTERNOON SHOW & ACTIVITIES ===");
console.log("Visitors enter the park as the afternoon activities start.");
nemo.waterShow();
pascal.camouflage();
leo.play();
wolverine.usePower();
wolverine.makeSound();

console.log("\n=== PART 3: EVENING FEEDING & REST TIME ===");
console.log("The dinner bell rings across the zoo grounds.");
leo.eat();
baloo.eat();
nemo.eat();
pascal.eat();
wolverine.eat();

console.log("\nEveryone has finished eating. The zoo closes safely for the night.");