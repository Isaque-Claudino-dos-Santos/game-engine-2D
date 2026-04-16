export enum KeyEvent {
  DOWN,
  UP,
}

type keyboardKey = {
  code: string
  event: KeyEvent
  interactions: number
}

export default class keyboard {
  keys: Record<string, keyboardKey> = {}

  constructor() {
    window.addEventListener('keydown', (e) => {
      const { code } = e

      if (!(code in this.keys)) {
        this.keys[code] = {
          code,
          event: KeyEvent.DOWN,
          interactions: 0,
        }
      }

      this.keys[code].event = KeyEvent.DOWN
    })

    window.addEventListener('keyup', (e) => {
      const { code } = e

      if (!(code in this.keys)) {
        this.keys[code] = {
          code,
          event: KeyEvent.UP,
          interactions: 0,
        }
      }

      this.keys[code].event = KeyEvent.UP
      this.keys[code].interactions = 0
    })
  }

  get(code: string) {
    return this.keys[code]
  }

  check(code: string, times: number | null = null): boolean {
    const key = this.get(code)

    if (!key) return false

    const isDown = key.event === KeyEvent.DOWN

    if (!isDown) return false

    this.keys[code].interactions += 1
    const requiredInteractions =
      typeof times === 'number' ? key.interactions <= times : true

    return isDown && requiredInteractions
  }
}
