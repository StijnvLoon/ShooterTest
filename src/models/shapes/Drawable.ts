export abstract class Drawable {

    constructor(
        protected y: number,
        protected x: number,
        protected width: number,
        protected height: number,
        protected color: string,
        protected rotation: number = 0
    ) { }

    public abstract render(context: CanvasRenderingContext2D)

    public setPosition(y: number, x: number) {
        this.y = y
        this.x = x
    }

    public setRotation(degrees: number) {
        this.rotation = degrees
    }

    public adjustPosition(vY: number, vX: number) {
        this.y += vY
        this.x += vX
    }

    public getPosition(): { y: number, x: number } {
        return { y: this.y, x: this.x }
    }
}