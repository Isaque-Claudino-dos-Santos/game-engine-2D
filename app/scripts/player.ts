import Player from '../entities/Player'
import { keyboard, mouse } from '../modules'
import Vector2 from '../modules/Vector2'

export function playerMoviment(player: Player) {
  const speed = new Vector2(10, 10)
  const pos = player.sprite.getPosition()

  if (keyboard.check('KeyD')) {
    pos.x += speed.x
  }

  if (keyboard.check('KeyA')) {
    pos.x -= speed.x
  }

  if (keyboard.check('KeyW')) {
    pos.y -= speed.y
  }

  if (keyboard.check('KeyS')) {
    pos.y += speed.y
  }
}

export function playerAim(player: Player) {
  const cat = player.sprite
    .getPosition()
    .sum(player.sprite.getOrigin())
    .sub(mouse.vector)

  player.sprite.setRotate(Math.atan2(cat.y, cat.x))
}
