import Canvas from './Modules/Canvas'
import DrawRect from './Modules/DrawRect'
import GameLoop from './Modules/GameLoop'
import Timer from './Modules/Timer'
import Vector2 from './Modules/Vector2'

const canvas = new Canvas()
const root = document.querySelector<HTMLDivElement>('#root')!

canvas.attachIn(root).setResolution(1920, 1080).setStyles({
  width: '80%',
  height: '80%',
  border: '1px solid',
  margin: '1em',
})

const game = new GameLoop()
const rect = new DrawRect()

game.init = () => {
  game.timers.create()

  rect.getSize().set(30, 30)
  rect.getPosition().set(0, 0)
  rect.setRotate(0)
}

game.update = () => {
  if (game.timers.check(0, 1000)) {
    console.log('ok')
  }

  if (game.keyboard.check('Space', 1)) {
    console.log('ok 2')
  }

  if (game.keyboard.check('KeyD')) {
    const newPos = rect.getPosition().sum(Vector2.RIGHT)

    rect.getPosition().set(newPos.getX(), newPos.getY())
  }
}

game.render = () => {
  rect.draw(canvas.getContext())
}

game.start()
