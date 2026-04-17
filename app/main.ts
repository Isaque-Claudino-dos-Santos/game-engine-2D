import Player from './entities/Player'
import GameKernel from './modules/GameKernel'

const game = new GameKernel()

new Player()

game.boot()
