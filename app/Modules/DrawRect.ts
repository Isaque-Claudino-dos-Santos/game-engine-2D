import { Origin } from './enums/Origin'
import Drawable from './interfaces/Drawable'
import Originable from './interfaces/Originable'
import Positionable from './interfaces/Positionable'
import Rotateable from './interfaces/Rotateable'
import Sizeable from './interfaces/Sizeable'
import Vector2 from './Vector2'

export default class DrawRect
  implements Drawable, Positionable, Originable, Sizeable, Rotateable
{

  private pos: Vector2 = new Vector2()
  private origin: Origin | Vector2 = Origin.CENTER
  private size: Vector2 = new Vector2()
  private rotate: number = 0

  setRotate(rotate: number): void {
    this.rotate = rotate
  }

  getSize(): Vector2 {
    return this.size
  }

  setOrigin(origin: Origin | Vector2): this {
    this.origin = origin
    return this
  }

  getOrigin(): Vector2 {
    if (this.origin instanceof Vector2) {
      return this.origin
    }

    const originsMap = {
      [Origin.CENTER]: { x: this.size.halfX(), y: this.size.halfY() },
      [Origin.BOTTON]: { x: this.size.halfX(), y: this.size.getX() },
      [Origin.BOTTON_LEFT]: { x: 0, y: this.size.getY() },
      [Origin.BOTTON_RIGHT]: { x: this.size.getX(), y: this.size.getY() },
      [Origin.LEFT_CENTER]: { x: 0, y: this.size.halfY() },
      [Origin.RIGTH_CENTER]: { x: this.size.getX(), y: this.size.halfY() },
      [Origin.TOP_LEFT]: { x: 0, y: 0 },
      [Origin.TOP_RIGHT]: { x: this.size.getX(), y: 0 },
      [Origin.TOP]: { x: 0, y: this.size.getY() },
    }

    const originsObserver = originsMap[this.origin]

    return new Vector2(originsObserver.x, originsObserver.y)
  }

  getPosition(): Vector2 {
    return this.pos
  }

  draw(context: CanvasRenderingContext2D): void {
    const origin = this.getOrigin()
    const translation = this.getOrigin().sum(this.pos)

    context.save()
    context.translate(translation.getX(), translation.getY())
    context.rotate(this.rotate)
    context.rect(
      -origin.getX(),
      -origin.getY(),
      this.size.getX(),
      this.size.getY(),
    )
    context.fill()
    context.restore()
  }
}
