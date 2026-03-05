import Canvas from './Modules/Canvas'

const canvas = new Canvas()
const root = document.querySelector<HTMLDivElement>('#root')!

canvas.attachIn(root).setResolution(1920, 1080).setStyles({
  width: '500px',
  height: '500px',
  border: '1px solid',
  margin: '1em',
})

console.log('2D CONTEXT: ', canvas.getContext())
canvas
  .getContext()
  .fillRect(
    0,
    0,
    (canvas.resolution?.getX() ?? 0) * 0.05,
    (canvas.resolution?.getY() ?? 0) * 0.05,
  )
