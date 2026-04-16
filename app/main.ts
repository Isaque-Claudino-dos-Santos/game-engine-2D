import Canvas from './Modules/Canvas'
import DrawRect from './Modules/DrawRect'
import GameLoop from './Modules/GameLoop'
import Timer from './Modules/Timer'

const canvas = new Canvas()
const root = document.querySelector<HTMLDivElement>('#root')!

canvas.attachIn(root).setResolution(1920, 1080).setStyles({
  width: '80%',
  height: '80%',
  border: '1px solid',
  margin: '1em',
})

const gameLoop = new GameLoop()
const myTimer = new Timer(1000)
gameLoop.timers.push(myTimer)

gameLoop.update = () => {
  if (myTimer.check()) {
  }
}

gameLoop.loop(0)

const rect = new DrawRect()
rect.getSize().set(30, 30)
rect.getPosition().set(0, 0)
rect.setRotate(0)
rect.draw(canvas.getContext())
