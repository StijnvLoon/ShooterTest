import { Drawable } from "./Drawable";

export class Circle extends Drawable {

    constructor(
        y: number,
        x: number,
        radius: number,
        color: string
    ) {
        super(y, x, radius, radius, color);
    }

    public render(context: CanvasRenderingContext2D) {
        context.beginPath()
        context.fillStyle = this.color
        context.arc(this.x, this.y, this.width, 0, 2 * Math.PI);
        context.fill();
        context.closePath();

        // context.beginPath()
        // const lineStart = { x: this.x, y: this.y - this.height}
        // const lineEnd = { x: this.x, y: this.y}

        // context.translate(lineEnd.x, lineEnd.y);
        // context.rotate(this.degreesToRadius(this.rotation));
        // context.translate(-lineEnd.x, -lineEnd.y);

        // context.moveTo(lineStart.x, lineStart.y)
        // context.lineTo(lineEnd.x, lineEnd.y)
        // context.strokeStyle = 'white'
        // context.lineWidth = 5
        // context.stroke()
        // context.closePath()

        // context.setTransform(1,0,0,1,0,0);
    }
}