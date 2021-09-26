import { Line } from './shapes/Line'
import { IRenderer } from './IRenderer'

export class Bullet extends Line implements IRenderer {

    constructor(
        y: number,
        x: number,
        vY: number,
        vX: number,
        rotation: number
    ) {
        super(y, x, 20, 0, 5, 'red')
        this.rotation = rotation
    }

    update(): void {
        // this.adjustPosition(0.01, 0.01)
        // console.log(this.getPosition())
    }
}