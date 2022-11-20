import { Cheese, Dough, Sauce } from "./ingridients";
import { PizzaIngridientFactory } from "./pizza-ingridient-factory";

export abstract class Pizza {
    protected dough: Dough;
    protected sauce: Sauce;
    protected cheese: Cheese;
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    public bake(): void {
        console.log(`Baking ${this.name}`);
    }

    public cut(): void {
        console.log(`Cutting ${this.name}`);
    }

    public box(): void {
        console.log(`Boxing ${this.name}`);
    }

    public getName(): string {
        return this.name;
    }

    abstract prepare(): void;
}

export class CheesePizza extends Pizza {
    constructor(private ingriendFactory: PizzaIngridientFactory) {
        super("Cheese Pizza");
    }

    prepare(): void {
        console.log(`Preparing ${this.getName()}`);

        this.dough = this.ingriendFactory.createDough();
        this.sauce = this.ingriendFactory.createSauce();
        this.cheese = this.ingriendFactory.createCheese();
    }
}

export class PepperoniPizza extends Pizza {
    constructor(private ingriendFactory: PizzaIngridientFactory) {
        super("Pepperoni Pizza");
    }

    prepare(): void {
        console.log(`Preparing ${this.getName()}`);

        this.dough = this.ingriendFactory.createDough();
        this.sauce = this.ingriendFactory.createSauce();
        this.cheese = this.ingriendFactory.createCheese();
    }
}
