import { QuackBehaviour } from "./QuackBehaviour";

export class Quack implements QuackBehaviour {
  quack(): void {
    console.log("quacking");
  }
}
