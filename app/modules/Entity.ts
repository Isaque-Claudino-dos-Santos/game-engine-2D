import { gameEvents } from '.'
import DrawRect from './DrawRect'

type Sprite = DrawRect

export default abstract class Entity {
  static vitualId = 0
  id = 0
  public sprite: Sprite | undefined

  constructor() {
    this.id = ++Entity.vitualId
    gameEvents.entities[this.id] = this
  }

  init = () => {}

  update = () => {}

  render = () => {
    this.sprite?.draw()
  }
}
