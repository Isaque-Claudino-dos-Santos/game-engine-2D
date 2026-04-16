import CanvasInterface from './interfaces/CanvasInterface'
import Vector2 from './Vector2'

export default class Canvas implements CanvasInterface {
  private element?: HTMLCanvasElement
  private context?: CanvasRenderingContext2D
  public resolution?: Vector2

  getContext(): CanvasRenderingContext2D {
    const element = this.getElement()
    const context = element.getContext('2d')

    if (!context) {
      throw new Error('get 2d context error')
    }

    return context
  }

  getElement() {
    if (!this.element) throw new Error('get element canvas error.')
    return this.element
  }

  setResolution(x: number, y: number): this {
    const element = this.getElement()
    element.width = x
    element.height = y
    this.resolution = new Vector2(x, y)
    return this
  }

  setStyles(styles: Partial<CSSStyleDeclaration>): this {
    const element = this.getElement()
    Object.assign(element.style, styles)
    return this
  }
  attachIn(parent: HTMLElement): this {
    if (!this.element) this.element = document.createElement('canvas')

    parent.appendChild(this.element)

    return this
  }
}
