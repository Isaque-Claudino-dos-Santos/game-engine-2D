export default interface CanvasInterface {
  setResolution(x: number, y: number): this
  attachIn(parent: HTMLElement): this
}
