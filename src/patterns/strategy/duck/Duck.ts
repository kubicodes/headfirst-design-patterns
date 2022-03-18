import { FlyBehaviour } from "./fly/FlyBehaviour";
import { QuackBehaviour } from "./quack/QuackBehaviour";

export abstract class Duck {
  constructor(
    private flyBehaviour: FlyBehaviour,
    private quackBehaviour: QuackBehaviour
  ) {}

  abstract display(): void;

  performFly(): void {
    this.flyBehaviour.fly();
  }

  performQuack(): void {
    this.quackBehaviour.quack();
  }

  setFlyBehaviour(flyBehaviour: FlyBehaviour): void {
    this.flyBehaviour = flyBehaviour;
  }

  setQuackBehaviour(quackBehaviour: QuackBehaviour): void {
    this.quackBehaviour = quackBehaviour;
  }
}
