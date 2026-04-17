import { canvas, gameEvents, mouse } from '.'

export default class GameKernel {
  constructor() {}

  boot() {
    const root = document.querySelector<HTMLDivElement>('#root')!

    canvas.attachIn(root).setResolution(1920, 1080).setStyles({
      width: '80%',
      height: '80%',
      border: '1px solid',
      margin: '1em',
    })


    mouse.listen()
    gameEvents.start()
  }
}
