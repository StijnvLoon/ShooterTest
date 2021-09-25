import { Drawable } from "./Drawable";
import { Helper } from "../Helper";

export class Line extends Drawable {

    constructor(
        y: number,
        x: number,
        protected vY: number,
        protected vX: number,
        private lineWidth: number,
        color: string
    ) {
        super(y, x, 0, 0, color);
    }

    public render(context: CanvasRenderingContext2D) {
        context.beginPath()
        const fromCoords = { x: this.x, y: this.y }
        const toCoords = { x: this.x + this.vX, y: this.y + this.vY }

        context.translate(toCoords.x, toCoords.y);
        context.rotate(Helper.degreesToRadius(this.rotation));
        context.translate(-toCoords.x, -toCoords.y);

        context.moveTo(fromCoords.x, fromCoords.y)
        context.lineTo(toCoords.x, toCoords.y)
        context.strokeStyle = this.color
        context.lineWidth = this.lineWidth
        context.stroke()
        context.closePath()

        context.setTransform(1,0,0,1,0,0);
    }
}