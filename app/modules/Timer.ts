export type TimerItem = {
  elapsed: number
  lastTime: number
}

export default class Timer {
  private static instance: Timer | null = null

  time: number = 0
  private items: Record<string, TimerItem> = {}

  static getInstance() {
    if (!this.instance) {
      this.instance = new Timer()
    }

    return this.instance
  }

  get(name: string) {
    if (name in this.items) {
      return this.items[name]
    }

    throw new Error(`timer ${name} not found`)
  }

  create(name: string) {
    this.items[name] = {
      elapsed: 0,
      lastTime: 0,
    }
  }

  check(name: string, target: number = 0): boolean {
    const timer = this.get(name)

    if (timer.elapsed >= target) {
      timer.lastTime = this.time
      return true
    }

    return false
  }

  reset(name: string) {
    const timer = this.get(name)

    timer.lastTime = 0
    timer.elapsed = 0
  }

  notify(time: number) {
    for (const name in this.items) {
      const timer = this.items[name]
      timer.elapsed = time - timer.lastTime
      this.time = time
    }
  }
}
