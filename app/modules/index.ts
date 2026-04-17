import Canvas from './Canvas'
import GameEvents from './GameEvents'
import Keyboard from './Keyboard'
import Mouse from './Mouse'
import Timer from './Timer'

export const timer = Timer.getInstance()
export const canvas = Canvas.getInstance()
export const keyboard = Keyboard.getInstance()
export const gameEvents = GameEvents.getInstance()
export const mouse = Mouse.getInstance()
