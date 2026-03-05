import VectorInterface from './Interfaces/VectorInterface'

export default class Vector implements VectorInterface {
  x: number
  y: number

  constructor(x: number = 0, y: number = 0) {
    this.x = x
    this.y = y
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

  copy(): VectorInterface {
    return new Vector(this.x, this.y)
  }

  set(x: number, y: number): VectorInterface {
    this.x = x
    this.y = y
    return this
  }
}
