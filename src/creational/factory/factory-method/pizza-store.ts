import { PizzaStore } from "./factory";
import { ChicagoMargherita, ChicagoPizzaPepperoni, NYPizzaMargherita, NYPizzaPepperoni, Pizza } from "./pizza";

export type NewYorkPizzaType = "margherita" | "pepperoni";

export class NewYorkPizzaStore extends PizzaStore {
    public createPizza(type: NewYorkPizzaType): Pizza {
        switch (type) {
            case "margherita":
                return new NYPizzaMargherita();
            case "pepperoni":
                return new NYPizzaPepperoni();
        }
    }
}

// same with NY but separated it to be more flexible in future cases when the menu can differ
export type ChicagoPizzaType = "margherita" | "pepperoni";

export class ChicagoPizzaStore extends PizzaStore {
    public createPizza(type: ChicagoPizzaType): Pizza {
        switch (type) {
            case "margherita":
                return new ChicagoMargherita();
            case "pepperoni":
                return new ChicagoPizzaPepperoni();
        }
    }
}
