import { Circle } from "./shapes/Circle";
import { Square } from "./shapes/Square";

export class Enemy extends Square {

    constructor(
        y: number,
        x: number
    ) {
        super(y, x, 15, 15, 'red');
    }

    public setPosition(x: number, y: number) {
        this.y = y
        this.x = x
    }

    public update() { }
}