import { Pizza, PizzaMargherita, PizzaPepperoni } from "./pizza";

export type PizzaType = "margherita" | "pepperoni";

export interface ISimplePizzaFactory {
    createPizza(type: PizzaType): Pizza;
}

export class SimplePizzaFactory implements ISimplePizzaFactory {
    createPizza(type: PizzaType): Pizza {
        switch (type) {
            case "margherita":
                return new PizzaMargherita();
            case "pepperoni":
                return new PizzaPepperoni();
        }
    }
}
