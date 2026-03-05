import Canvas from './Modules/Canvas'
import DrawRect from './Modules/DrawRect'

const canvas = new Canvas()
const root = document.querySelector<HTMLDivElement>('#root')!

canvas.attachIn(root).setResolution(1920, 1080).setStyles({
  width: '80%',
  height: '80%',
  border: '1px solid',
  margin: '1em',
})

const rect = new DrawRect()
rect.getSize().set(30, 30)
rect.getPosition().set(100, 100)
rect.draw(canvas.getContext())
