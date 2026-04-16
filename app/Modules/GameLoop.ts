import Timer from './Timer'

export default class GameLoop {
  timers: Timer[] = []

  update = () => {}

  render = () => {}

  loop = (time: number | null) => {
    if (time)
      this.timers.forEach((timer) => {
        timer.elapsed = time  - timer.lastTime
        timer.time = time
      })

    this.update()
    this.render()
    requestAnimationFrame(this.loop)
  }
}
