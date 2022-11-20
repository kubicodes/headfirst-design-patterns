import { CheesePizza, PepperoniPizza, Pizza } from "./pizza";
import { ChicagoIngridientFactory, NYPizzaIngridientFactory } from "./pizza-ingridient-factory";

export type PizzaType = "cheese" | "pepperoni";

export abstract class PizzaStore {
    orderPizza(type: PizzaType): Pizza {
        const pizza = this.createPizza(type);

        pizza.prepare();
        pizza.bake();
        pizza.box();
        pizza.cut();

        return pizza;
    }

    abstract createPizza(type: PizzaType): Pizza;
}

export class NYPizzaStore extends PizzaStore {
    private ingridientFactory = new NYPizzaIngridientFactory();

    createPizza(type: PizzaType): Pizza {
        switch (type) {
            case "cheese":
                return new CheesePizza(this.ingridientFactory);
            case "pepperoni":
                return new PepperoniPizza(this.ingridientFactory);
        }
    }
}

export class ChicagoPizzaStore extends PizzaStore {
    private ingridientFactory = new ChicagoIngridientFactory();

    createPizza(type: PizzaType): Pizza {
        switch (type) {
            case "cheese":
                return new CheesePizza(this.ingridientFactory);
            case "pepperoni":
                return new PepperoniPizza(this.ingridientFactory);
        }
    }
}
