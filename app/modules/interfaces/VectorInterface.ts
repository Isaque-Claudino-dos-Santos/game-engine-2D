export default interface Vector2Interface {
  /**
   * make sum of other vector2
   */
  sum(vector2: Vector2Interface): Vector2Interface

  getX(): number
  getY(): number
  copy(): Vector2Interface
  halfX(): number
  halfY(): number
  set(x: number, y: number): Vector2Interface
}
