import { Observer } from "./observer";

export interface Subject {
    registerObserver(observer: Observer): void;
    removeObserver(observer: Observer): void;
    notifyObservers(): void;
}

export class WeatherData implements Subject {
    private observers: Observer[] = [];
    private temperature: number;
    private humidity: number;
    private pressure: number;

    public registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    public removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index === -1) {
            return;
        }

        this.observers = [...this.observers.splice(0, index), ...this.observers.splice(index + 1, this.observers.length)];
    }

    public notifyObservers(): void {
        for (const observer of this.observers) {
            observer.update(this.temperature, this.humidity, this.pressure);
        }
    }

    // For now we don't care how this is called. we assume that this gets called whenever new weather data is available
    public setMeasurement(temperature: number, humidity: number, pressure: number) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;

        this.notifyObservers();
    }
}
