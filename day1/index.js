class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
        this.hunger = 50;
    }
    makeSound() {
         console.log(`${this.name} Make a sound`)
    }
    eat() {
        this.hunger = this.hunger - 10;
        console.log(
            `${this.name} the ${this.species} ate
         Hunger level is now ${this.hunger}.`
        );
    }
        play() {
        console.log(`${this.name} the ${this.species} is happily rolling around and playing with zookeepers!`);
    }

}

const leo = new Animal("Leo", "Lion");

console.log(leo);

console.log(leo.hunger);

leo.eat();

console.log(leo.hunger);

class Mammal extends Animal {
    constructor(name, species, furColor) {
        super(name,species);
        this.furColor = furColor;
    }

    groom() {
        console.log(`${this.name} is brushing thier ${this.furColor} fur.`);
    }


}

class Birds extends Animal {
    constructor(name, species, wingspan) {
        super(name,species);
        this.wingspan = wingspan;
    }

    makeSound() {
        console.log(`${this.name} chirps: Tweet! Tweet!`)
    }
    flyPatrol() {
        console.log(`${this.name} spreads their ${this.wingspan} wings and patrols the high sky above the zoo.`);
    }

}

const zazu = new Birds("Zazu","Hornbill", "2 feet");
const baloo = new Mammal("Baloo","Bear","brown");

zazu.makeSound();
baloo.groom();

class Reptile extends Animal {
    constructor(name, species, isVenomous) {
        super(name, species);
        this.isVenomous = isVenomous; 
    }

    baskInSun() {
        console.log(`${this.name} the ${this.species} is warm-bloodedly soaking in the sun.`);
    }
    camouflage() {
        console.log(`${this.name} shifts skin pigment to blend into the surrounding green leaves... Poof! Hidden!`);
    }
}


class Mutant extends Animal {
    constructor(name, species, mutantPower) {
        super(name, species);
        this.mutantPower = mutantPower; 
    }
    usePower() {
        console.log(`${this.name} is a ${this.species} has power: ${this.mutantPower}!`);
    }

    makeSound() {
        console.log(`${this.name} shouts: I'm back baby!`);
    }
    guardZoo() {
        console.log(`${this.name} stands on the front gate, keeping the zoo safe from villains!`);
    }
}

const pascal = new Reptile("Pascal", "Chameleon", false);
const wolverine = new Mutant("Logan", "Human/Mutant - X-MEN ", "Adamantium Claws & Healing Factor");


zazu.makeSound();         
zazu.flyPatrol();        
pascal.baskInSun();       
baloo.groom();            
wolverine.guardZoo();

pascal.camouflage();      
leo.play();               
wolverine.usePower();     
wolverine.makeSound();

leo.eat();               
baloo.eat();               
pascal.eat();            
wolverine.eat();          