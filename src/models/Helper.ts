export class Helper {

    public static degreesToRadius(degrees: number): number {
        return ((2 * Math.PI) * degrees) / 360
    }

    public static radiusToDegrees(angle: number): number {
        return (angle * 360) / (2 * Math.PI)
    }

}