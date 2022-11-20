import { Pizza } from "./pizza";
import { ISimplePizzaFactory, PizzaType } from "./simple-pizza-factory";

export interface IPizzaStore {
    orderPizza(type: PizzaType): Pizza;
}

export class PizzaStore implements IPizzaStore {
    constructor(private pizzaFactory: ISimplePizzaFactory) {}

    orderPizza(type: PizzaType): Pizza {
        const pizza = this.pizzaFactory.createPizza(type);

        pizza.prepare();
        pizza.bake();
        pizza.cut();
        pizza.box();

        return pizza;
    }
}
