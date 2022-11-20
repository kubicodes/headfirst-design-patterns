import { Cheese, Dough, Gouda, MarinaSauce, Mozarella, Sauce, ThickCrustDough, ThinCrustDough, TomatoSauce } from "./ingridients";

export interface PizzaIngridientFactory {
    createDough(): Dough;
    createSauce(): Sauce;
    createCheese(): Cheese;
}

export class NYPizzaIngridientFactory implements PizzaIngridientFactory {
    createDough(): Dough {
        return new ThickCrustDough();
    }

    createCheese(): Cheese {
        return new Mozarella();
    }

    createSauce(): Sauce {
        return new TomatoSauce();
    }
}

export class ChicagoIngridientFactory implements PizzaIngridientFactory {
    createDough(): Dough {
        return new ThinCrustDough();
    }

    createCheese(): Cheese {
        return new Gouda();
    }

    createSauce(): Sauce {
        return new MarinaSauce();
    }
}
