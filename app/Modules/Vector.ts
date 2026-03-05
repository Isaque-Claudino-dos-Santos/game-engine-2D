import VectorInterface from './Interfaces/VectorInterface'

export default class Vector implements VectorInterface {
  private x: number
  private y: number

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

  copy(): VectorInterface {
    return new Vector(this.x, this.y)
  }
}
