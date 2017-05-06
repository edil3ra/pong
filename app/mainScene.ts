import * as ex from 'excalibur'

import {
  WIN_HEIGHT,
  PADDLE_WIDTH,
  PADDLE_HEIGHT,
  PADDLE_TOP_X,
  PADDLE_TOP_Y,
  PADDLE_TOP_SPEED,
  PADDLE_BOTTOM_X,
  PADDLE_BOTTOM_Y,
  PADDLE_BOTTOM_SPEED,
  PADDLE_TOP_COLOR,
  PADDLE_BOTTOM_COLOR,
  BALL_WIDTH,
  BALL_HEIGHT,
  BALL_X,
  BALL_Y,
  BALL_COLOR,
  BALL_INIT_SPEED,
  TIME_COLLISION_DETECTION
} from './config'



import { Paddle } from './paddle'
import { Ball } from './ball'



export class MainScene extends ex.Scene {

  
  //Actor
  private paddleTop: Paddle
  private paddleBottom: Paddle
  private ball: Ball

  private timer:number = 0
  
  constructor(game: ex.Engine) {
    super(game)
  }

  onInitialize(engine: ex.Engine) {
	this.paddleTop = new Paddle(PADDLE_TOP_X, PADDLE_TOP_Y, PADDLE_WIDTH, PADDLE_HEIGHT, PADDLE_TOP_COLOR, PADDLE_TOP_SPEED)
	this.paddleBottom = new Paddle(PADDLE_BOTTOM_X, PADDLE_BOTTOM_Y, PADDLE_WIDTH, PADDLE_HEIGHT, PADDLE_BOTTOM_COLOR, PADDLE_BOTTOM_SPEED)
	this.ball = new Ball(BALL_X, BALL_Y, BALL_WIDTH, BALL_HEIGHT, BALL_COLOR, BALL_INIT_SPEED)
	
	for (let actor of [this.paddleTop, this.paddleBottom, this.ball]) {
	  this.add(actor)
	}
  }


  private updatePaddle2(engine: ex.Engine) {
	if(engine.input.keyboard.isHeld(ex.Input.Keys.Left)) {
	  this.paddleBottom.moveLeft()
	}
	else if(engine.input.keyboard.isHeld(ex.Input.Keys.Right)) {
	  this.paddleBottom.moveRight()
	}
	else {
	  this.paddleBottom.moveNo()
	}	
  }

  private updatePaddle1(engine: ex.Engine) {
	
  }

  private updateBallOut(engine: ex.Engine) {
	if(this.ball.y <= 0) {
	  this.paddleTop.restart()
	  this.paddleBottom.restart()
	  this.ball.restart(-1)
	}

	if(this.ball.y >= WIN_HEIGHT) {
	  this.paddleTop.restart()
	  this.paddleBottom.restart()
	  this.ball.restart(1)
	}
  }	
  

  private ballCollision(paddle: Paddle) {
	const ballX = this.ball.x
	const paddleX = paddle.x
	const distanceBallPaddle = ballX - paddleX
	const scaleFactor = distanceBallPaddle / (paddle._width * 0.5 + this.ball._width * 0.5)

	const effectAngle = Math.PI / 3
	const effectAngleFactor = effectAngle * scaleFactor

	this.ball.vel.y = -this.ball.vel.y
	this.ball.vel = this.ball.vel.rotate(scaleFactor)
	
	
  }
  
  
  update(engine: ex.Engine, delta: number) {
	super.update(engine, delta)
	this.updatePaddle1(engine)
	this.updatePaddle2(engine)
	this.updateBallOut(engine)

	this.timer += delta

	if(this.timer >= TIME_COLLISION_DETECTION) {
	  this.timer = 0
	  if(this.ball.collides(this.paddleTop)) {
		this.ballCollision(this.paddleTop)
	  }

	  if(this.ball.collides(this.paddleBottom)) {
		this.ballCollision(this.paddleBottom)
	  }
	  
	}
  }


}


