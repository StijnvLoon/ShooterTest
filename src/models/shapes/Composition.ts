import { Drawable } from './Drawable'

export abstract class Composition {

    constructor(
        protected drawables: Drawable[] = []
    ) { }

    protected addDrawable(drawable: Drawable) {
        this.drawables.push(drawable)
    }
    
    public render(context: CanvasRenderingContext2D) {
        this.drawables.forEach(drawable => drawable.render(context))
    }

}