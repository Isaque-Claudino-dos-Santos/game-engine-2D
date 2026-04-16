export default class Timer {
  elapsed: number = 0
  lastTime: number = 0
  time: number = 0

  constructor(public target: number = 0) {}

  check(): boolean {
    if (this.elapsed >= this.target) {
      this.lastTime = this.time
      return true
    }
    return false
  }
}
