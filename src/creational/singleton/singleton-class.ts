export class SingletonClass {
    private static singletonInstance: SingletonClass;

    // ensures that no instance is created with new
    private constructor() {}

    public static getInstance(): SingletonClass {
        // ensure that always the same instance is returned
        if (!this.singletonInstance) {
            this.singletonInstance = new SingletonClass();
        }

        return this.singletonInstance;
    }
}
