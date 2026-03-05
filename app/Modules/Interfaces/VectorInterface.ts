export default interface VectorInterface {
  getX(): number
  getY(): number
  copy(): VectorInterface
  halfX(): number
  halfY(): number
  set(x: number, y: number): VectorInterface
}
