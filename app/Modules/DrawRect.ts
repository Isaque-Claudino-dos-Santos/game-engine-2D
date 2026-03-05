import { ContextReplacementPlugin } from 'webpack'
import { Origin } from './enums/Origin'
import Drawable from './Interfaces/Drawable'
import Originable from './Interfaces/Originable'
import Positionable from './Interfaces/Positionable'
import Rotateable from './Interfaces/Rotateable'
import Sizeable from './Interfaces/Sizeable'
import Vector from './Vector'
import Canvas from './Canvas'

export default class DrawRect
  implements Drawable, Positionable, Originable, Sizeable, Rotateable
{
  constructor() {}
  private pos: Vector = new Vector()
  private origin: Origin = Origin.CENTER
  private size: Vector = new Vector()
  private rotate: number = 0

  setRotate(rotate: number): void {
    this.rotate = rotate
  }

  getSize(): Vector {
    return this.size
  }

  getOrigin(): Vector {
    const origin = new Vector()

    switch (this.origin) {
      case Origin.CENTER:
        origin.x = this.size.halfX()
        origin.y = this.size.halfY()
        break
      case Origin.BOTTON:
        origin.x = this.size.halfX()
        origin.y = this.size.x
        break
      case Origin.BOTTON_LEFT:
        origin.y = this.size.x
        break
      case Origin.BOTTON_RIGHT:
        origin.x = this.size.x
        origin.y = this.size.x
        break
      case Origin.LEFT_CENTER:
        origin.y = this.size.halfY()
        break
      case Origin.RIGTH_CENTER:
        origin.x = this.size.x
        origin.y = this.size.halfY()
        break
      case Origin.TOP_LEFT:
        break
      case Origin.TOP_RIGHT:
        origin.x = this.size.x
        break
      case Origin.TOP:
        origin.y = this.size.halfY()
        break
    }

    return origin
  }

  getPosition(): Vector {
    return this.pos
  }

  draw(context: CanvasRenderingContext2D): void {
    const origin = this.getOrigin()

    context.save()
    context.translate(
      this.pos.getX() + origin.getX(),
      this.pos.getY() + origin.getY(),
    )
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
