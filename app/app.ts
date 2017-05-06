import * as ex from 'excalibur'
import {
  WIN_WIDTH,
  WIN_HEIGHT,
  GAME_BACKGROUND,
} from './config'


import { MainScene } from './mainScene'
import { Paddle } from './paddle'
import { Ball } from './ball'



const game = new ex.Engine({
  width: WIN_WIDTH,
  height: WIN_HEIGHT,
  canvasElementId: 'game',
})
game.backgroundColor = GAME_BACKGROUND




const mainScene = new MainScene(game)
game.addScene('mainScene', mainScene)
game.goToScene('mainScene')
game.start()



