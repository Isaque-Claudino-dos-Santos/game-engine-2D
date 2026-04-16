import Vector2Interface from './interfaces/VectorInterface'

export default class Vector2 implements Vector2Interface {
  constructor(
    private x: number = 0,
    private y: number = 0,
  ) {}

  sum(vector2: Vector2Interface): Vector2Interface {
    const x = new Vector2(this.x + vector2.getX(), this.y + vector2.getY())
    return x
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

  set(x: number, y: number): Vector2Interface {
    this.x = x
    this.y = y
    return this
  }
}
