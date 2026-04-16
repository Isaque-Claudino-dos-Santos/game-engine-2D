export default class Timer {
  elapsed: number = 0
  lastTime: number = 0
  time: number = 0

  check(target: number = 0): boolean {
    if (this.elapsed >= target) {
      this.lastTime = this.time
      return true
    }
    return false
  }

  reset() {
    this.time = 0
    this.lastTime = 0
    this.elapsed = 0
  }
}
