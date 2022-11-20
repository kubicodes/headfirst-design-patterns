export interface Dough {
    getName(): string;
}

export class ThickCrustDough implements Dough {
    private name = "Thick Crust Dough";

    getName(): string {
        return this.name;
    }
}

export class ThinCrustDough implements Dough {
    private name = "Thin Crust Dough";

    getName(): string {
        return this.name;
    }
}

export interface Sauce {
    getName(): string;
}

export class TomatoSauce implements Sauce {
    private name = "Tomato Sauce";

    getName(): string {
        return this.name;
    }
}

export class MarinaSauce implements Sauce {
    private name = "Marina Sauce";

    getName(): string {
        return this.name;
    }
}

export interface Cheese {
    getName(): string;
}

export class Mozarella implements Cheese {
    private name = "Mozarella Cheese";

    getName(): string {
        return this.name;
    }
}

export class Gouda implements Cheese {
    private name = "Gouda Cheese";

    getName(): string {
        return this.name;
    }
}
