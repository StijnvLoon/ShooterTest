import { Line } from './shapes/Line'
import { IRenderer } from './IRenderer'
import { Settings } from './Settings'

export class Bullet extends Line implements IRenderer {

    private readonly speed: number = 2
    private velocityY: number = 0
    private velocityX: number = 0

    constructor(
        y: number,
        x: number,
        vY: number,
        vX: number,
        rotation: number,
        private destructor: () => void
    ) {
        super(y, x, vY, vX, 5, 'red')
        this.rotation = rotation

        this.velocityY = Math.sin((this.rotation - 90) * Math.PI / 180) * this.speed
        this.velocityX = Math.cos((this.rotation - 90) * Math.PI / 180) * this.speed
    }

    update(): void {
        this.adjustPosition(this.velocityY, this.velocityX)

        if(this.y < 0 || this.x < 0 || this.y > Settings.mapSize.height || this.x > Settings.mapSize.width) {
            this.destructor()
        }
    }
}