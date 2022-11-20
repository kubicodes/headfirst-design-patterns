export interface Pizza {
    prepare(): void;
    bake(): void;
    cut(): void;
    box(): void;
}

export class PizzaMargherita implements Pizza {
    prepare(): void {
        console.log("Preparing Margherita Pizza");
    }

    bake(): void {
        console.log("Baking Margherita Pizza");
    }

    cut(): void {
        console.log("Cutting Margherita Pizza");
    }

    box(): void {
        console.log("Boxing Margherita Pizza");
    }
}

export class PizzaPepperoni implements Pizza {
    prepare(): void {
        console.log("Preparing Pepperoni Pizza");
    }

    bake(): void {
        console.log("Baking Pepperoni Pizza");
    }

    cut(): void {
        console.log("Cutting Pepperoni Pizza");
    }

    box(): void {
        console.log("Boxing Pepperoni Pizza");
    }
}
