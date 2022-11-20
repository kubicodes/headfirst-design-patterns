export interface Pizza {
    prepare(): void;
    bake(): void;
    cut(): void;
    box(): void;
}

export class NYPizzaMargherita implements Pizza {
    prepare(): void {
        console.log("Preparing NY Margherita Pizza");
    }

    bake(): void {
        console.log("Baking NY Margherita Pizza");
    }

    cut(): void {
        console.log("Cutting NY Margherita Pizza");
    }

    box(): void {
        console.log("Boxing NY Margherita Pizza");
    }
}

export class NYPizzaPepperoni implements Pizza {
    prepare(): void {
        console.log("Preparing NY Pepperoni Pizza");
    }

    bake(): void {
        console.log("Baking NY Pepperoni Pizza");
    }

    cut(): void {
        console.log("Cutting NY Pepperoni Pizza");
    }

    box(): void {
        console.log("Boxing NY Pepperoni Pizza");
    }
}

export class ChicagoMargherita implements Pizza {
    prepare(): void {
        console.log("Preparing Chicago Margherita Pizza");
    }

    bake(): void {
        console.log("Baking Chicago Margherita Pizza");
    }

    cut(): void {
        console.log("Cutting Chicago Margherita Pizza");
    }

    box(): void {
        console.log("Boxing Chicago Margherita Pizza");
    }
}

export class ChicagoPizzaPepperoni implements Pizza {
    prepare(): void {
        console.log("Preparing Chicago Pepperoni Pizza");
    }

    bake(): void {
        console.log("Baking Chicago Pepperoni Pizza");
    }

    cut(): void {
        console.log("Cutting Chicago Pepperoni Pizza");
    }

    box(): void {
        console.log("Boxing Chicago Pepperoni Pizza");
    }
}
