import keyboard from './Keyboard'
import Timers from './Timers'

export default class GameLoop {
  timers: Timers = new Timers()
  keyboard: keyboard = new keyboard()

  init = () => {}

  update = () => {}

  render = () => {}

  loop = (time: number | null) => {
    if (time)
      this.timers.items.forEach((timer) => {
        timer.elapsed = time - timer.lastTime
        timer.time = time
      })

    this.update()
    this.render()

    requestAnimationFrame(this.loop)
  }

  start = () => {
    this.init()
    this.loop(0)
  }
}
