export interface IRenderer {
    render(context: CanvasRenderingContext2D): void
    update(): void
}