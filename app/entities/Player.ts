import DrawRect from '../modules/DrawRect'
import Entity from '../modules/Entity'
import { Origin } from '../modules/enums/Origin'
import { playerAim, playerMoviment } from '../scripts/player'

export default class Player extends Entity {
  sprite = new DrawRect()

  init = () => {
    this.sprite.getSize().set(50, 50)
    this.sprite.setOrigin(Origin.CENTER)
  }

  update = () => {
    playerMoviment(this)
    playerAim(this)
  }
}
