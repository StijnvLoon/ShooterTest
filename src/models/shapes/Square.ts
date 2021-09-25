import { Drawable } from "./Drawable";

export abstract class Square extends Drawable {

    constructor(
        y: number,
        x: number,
        width: number,
        height: number,
        color: string
    ) {
        super(y, x, width, height, color);
    }

    public render(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.fillStyle = this.color
        context.rect(this.x, this.y, this.width, this.height);
        context.fill();
        context.closePath();
    }
}