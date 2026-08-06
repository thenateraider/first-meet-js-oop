
import ui from './ui_console.js';
// console.log(rl);
const zooName = "JSD13 Nate Zoo";
console.clear();
console.log(`Welcome to the ${zooName} Explorer.`);
ui.showZooDirectory();
ui.displayZoo();
ui.inspectLocation();
ui.prepareAnimalFood();
ui.askForCommand();