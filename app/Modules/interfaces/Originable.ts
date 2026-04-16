import { Origin } from '../enums/Origin'
import Vector2 from '../Vector2'
import Vector2Interface from './VectorInterface'

export default interface Originable {
  getOrigin(): Vector2

  setOrigin(origin: Origin | Vector2Interface): this
}
