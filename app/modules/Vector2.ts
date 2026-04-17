import Vector2Interface from './interfaces/VectorInterface'

export default class Vector2 implements Vector2Interface {
  static LEFT = new Vector2(-1, 0)
  static RIGHT = new Vector2(1, 0)
  static TOP = new Vector2(0, -1)
  static BOTTON = new Vector2(0, 1)

  constructor(
    public x: number = 0,
    public y: number = 0,
  ) {}

  sum(vector2: Vector2): Vector2 {
    return new Vector2(this.x + vector2.getX(), this.y + vector2.getY())
  }
  
  sub(vector2: Vector2): Vector2 {
    return new Vector2(this.x - vector2.getX(), this.y - vector2.getY())
  }

  getX(): number {
    return this.x
  }

  getY(): number {
    return this.y
  }

  halfX(): number {
    return this.x / 2
  }

  halfY(): number {
    return this.y / 2
  }

  copy(): Vector2Interface {
    return new Vector2(this.x, this.y)
  }

  mult(value: number): Vector2 {
    return new Vector2(this.x * value, this.y * value)
  }

  set(x: number, y: number): Vector2Interface {
    this.x = x
    this.y = y
    return this
  }

  distance(vector: Vector2) {
    const catX = this.x - vector.x
    const catY = this.y - vector.y
    return Math.sqrt(catX ** 2 + catY ** 2)
  }
}
