import { Espresso } from "./beverage";
import { Mocha } from "./condiment";

const espresso = new Espresso();
const mochaEspresso = new Mocha(espresso);
console.log(`Product: ${mochaEspresso.getDescription()}, Cost: ${mochaEspresso.cost()}`);
console.log(`Cost without Mocha: ${espresso.cost()}`);
