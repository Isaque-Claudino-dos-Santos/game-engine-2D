import Timer from './Timer'

export default class Timers {
  items: Timer[] = []

  create() {
    this.items.push(new Timer())
  }

  get(timerIndex: number) {
    if (!(timerIndex in this.items)) {
      throw new Error(`timer ${timerIndex} not exists.`)
    }

    return this.items[timerIndex]
  }

  check(timerIndex: number, target: number): boolean {
    return this.get(timerIndex).check(target)
  }

  reset(timerIndex: number) {
    this.get(timerIndex).reset()
  }
}
