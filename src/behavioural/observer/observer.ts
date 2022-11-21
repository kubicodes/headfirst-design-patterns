export interface Observer {
    update(temperature: number, humdiity: number, pressure: number): void;
}

export interface DisplayElement {
    display(): void;
}

export class CurrentConditionsDisplay implements Observer, DisplayElement {
    private temperature: number;
    private humidity: number;
    private pressure: number;

    public update(temperature: number, humidity: number, pressure: number): void {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;

        this.display();
    }

    public display(): void {
        console.log(`Temperature: ${this.temperature}, Humidity: ${this.humidity}, Pressure: ${this.pressure}`);
    }
}
