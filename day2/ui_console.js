import zoo from './zooInfo.js';
import visitorInfo from './visitorInfo.js';

import { createInterface } from "node:readline";
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
})

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
    console.log(visitorInfo.visitors.moveLeft());
  }
  else if (command === "r") {
    console.log(visitorInfo.visitors.moveRight(zoo.zooPath.length - 1));
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
  console.table(zoo.animals);
}

function displayZoo() {
  console.log("\n--- JSD13 Nate Zoo ---");

  const zooMap = zoo.zooPath.map(item => item?.symbol).join(" - ");
  console.log(zooMap);

  let currentVisiorPath = [];
  for (let p = 0; p < zoo.zooPath.length; p++) {
    if (p === visitorInfo.visitors.position) {
      currentVisiorPath.push("👨")
    } else {
      currentVisiorPath.push("⚪")
    }
  }
  console.log(currentVisiorPath.join(" - "));

}

function inspectLocation() {
  
const currentPlace = zoo.zooPath[visitorInfo.visitors.position];
console.log (`\nYou are at >>> ${currentPlace.name}`);
  if (currentPlace.description){
    console.log(currentPlace.description);
  } else if (currentPlace.animal){
    console.log(currentPlace.animal);
  }
}
function prepareAnimalFood() {
  console.log("The zookeeper is preparing the animal feed ....");
  console.log("Visitors can continue exploring.\n");
  setTimeout(() => {
    console.log("The animal feed is ready ...");
  }, 2000);
}

export default{
    askForCommand,
    handleCommand,
    showZooDirectory,
    displayZoo,
    inspectLocation,
    prepareAnimalFood
}

