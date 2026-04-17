import { canvas, timer } from '.'
import Entity from './Entity'

export default class GameEvents {
  private static instance: GameEvents | null = null
  entities: Record<string | number, Entity> = {}

  static getInstance() {
    if (!this.instance) {
      this.instance = new GameEvents()
    }

    return new GameEvents()
  }

  private beforeRender() {
    canvas.clearCanvas()
  }

  init = () => {
    for (const key in this.entities) {
      this.entities[key].init()
    }
  }

  update = () => {
    for (const key in this.entities) {
      this.entities[key].update()
    }
  }

  render = () => {
    for (const key in this.entities) {
      this.entities[key].render()
    }
  }

  loop = (time: number | null) => {
    if (time) {
      timer.notify(time)
    }

    this.update()
    this.beforeRender()
    this.render()

    requestAnimationFrame(this.loop)
  }

  start = () => {
    this.init()
    this.loop(0)
  }
}
