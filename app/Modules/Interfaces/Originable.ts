import { Origin } from '../enums/Origin'
import Vector from '../Vector'

export default interface Originable {
  getOrigin(): Vector
}
