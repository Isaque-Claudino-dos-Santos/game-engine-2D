import { canvas } from '.'
import Vector2 from './Vector2'

export default class Mouse {
  private static instance: Mouse | null = null

  static getInstance() {
    if (!this.instance) {
      this.instance = new Mouse()
    }

    return this.instance
  }

  x = 0
  y = 0
  vector = new Vector2()

  constructor() {}

  listen() {
    const canvasElement = canvas.getElement()
    canvasElement.addEventListener('mousemove', (event) => {
      const rect = canvasElement.getBoundingClientRect()

      const mouseX = event.clientX - rect.left
      const mouseY = event.clientY - rect.top

      this.x = mouseX * ((canvas.resolution?.x ?? 0) / rect.width)
      this.y = mouseY * ((canvas.resolution?.y ?? 0) / rect.height)
      this.vector.set(this.x, this.y)
    })
  }
}
