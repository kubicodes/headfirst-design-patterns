import { Pizza } from "./pizza";

export abstract class PizzaStore {
    orderPizza(type: string): Pizza {
        const pizza = this.createPizza(type);

        pizza.prepare();
        pizza.bake();
        pizza.box();
        pizza.cut();

        return pizza;
    }

    // Factory Method -> will be implemented in subclasses
    abstract createPizza(type: string): Pizza;
}
