import { Beverage } from "./beverage";

// Our Abstract Decorator (wraps Beverage objects)
export abstract class CondimentDecorator {
    constructor(protected beverage: Beverage) {}

    public abstract getDescription(): string;
}

// concrete decorators
export class Mocha extends CondimentDecorator {
    constructor(beverage: Beverage) {
        super(beverage);
    }

    public getDescription(): string {
        return `${this.beverage.getDescription()}, Mocha`;
    }

    public cost(): number {
        return this.beverage.cost() + 0.2;
    }
}
