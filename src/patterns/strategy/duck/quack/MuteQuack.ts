import { Quack } from "./Quack";

export class MuteQuak implements Quack {
  quack(): void {
    console.log("cannot quack");
  }
}
