import { Circle } from "./shapes/Circle";
import { Line } from "./shapes/Line";
import { Composition } from "./shapes/Composition";
import { IRenderer } from "./IRenderer"
import { Helper } from "./Helper";

export class Player extends Composition implements IRenderer {

    private velocityY: number = 0
    private velocityX: number = 0

    private circle: Circle = new Circle(20, 20, 20, 'black')
    private line: Line = new Line(0, 20, 20, 0, 5, 'white')

    constructor() {
        super();
        this.addDrawable(this.circle)
        this.addDrawable(this.line)
    }

    public addMovement(direction: 'left' | 'right' | 'up' | 'down') {
        switch (direction) {
            case 'left':
                this.velocityX = -1
                break
            case 'right':
                this.velocityX = 1
                break
            case 'up':
                this.velocityY = 1
                break
            case 'down':
                this.velocityY = -1
                break
        }
    }

    public removeMovement(direction: 'left' | 'right' | 'up' | 'down') {
        switch (direction) {
            case 'left':
            case 'right':
                this.velocityX = 0
                break
            case 'up':
            case 'down':
                this.velocityY = 0
                break
        }
    }

    public aim(targetCoords: { y: number, x: number }) {
        const currentCoords = this.line.getPosition()
        let degrees

        if(targetCoords.x == currentCoords.x && targetCoords.y > currentCoords.y) {
            degrees = 0
        } else if (targetCoords.x == currentCoords.x && targetCoords.y < currentCoords.y) {
            degrees = 180
        } else if (targetCoords.y == currentCoords.y && targetCoords.x > currentCoords.x) {
            degrees = 90
        } else if (targetCoords.y == currentCoords.y && targetCoords.x < currentCoords.x) {
            degrees = 270
        } else {            
            degrees = Math.atan((targetCoords.x - currentCoords.x) / (currentCoords.y - targetCoords.y))
            degrees = Helper.radiusToDegrees(degrees)

            if(targetCoords.y < currentCoords.y) {
                degrees += 180
            }
        }

        this.line.setRotation(degrees + 180)
    }

    public update() {
        this.drawables.forEach(drawable => {
            if (this.velocityY != 0 && this.velocityX != 0) {
                drawable.adjustPosition(this.velocityY / 1.5, this.velocityX / 1.5)
            } else {
                drawable.adjustPosition(this.velocityY, this.velocityX)
            }
        })
    }
}