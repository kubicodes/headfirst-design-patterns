import { FlyBehaviour } from "./FlyBehaviour";

export class FlyNoWay implements FlyBehaviour {
  fly(): void {
    console.log("cannot fly");
  }
}
