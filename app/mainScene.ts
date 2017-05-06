import * as ex from 'excalibur'

import {
  WIN_HEIGHT,
  PADDLE_WIDTH,
  PADDLE_HEIGHT,
  PADDLE1_X,
  PADDLE1_Y,
  PADDLE1_SPEED,
  PADDLE2_X,
  PADDLE2_Y,
  PADDLE2_SPEED,
  PADDLE1_COLOR,
  PADDLE2_COLOR,
  BALL_WIDTH,
  BALL_HEIGHT,
  BALL_X,
  BALL_Y,
  BALL_COLOR,
  BALL_INIT_SPEED
} from './config'



import { Paddle } from './paddle'
import { Ball } from './ball'



export class MainScene extends ex.Scene {

  
  //Actor
  private paddle1: Paddle
  private paddle2: Paddle
  private ball: Ball

  
  constructor(game: ex.Engine) {
    super(game)
  }

  onInitialize(engine: ex.Engine) {
	this.paddle1 = new Paddle(PADDLE1_X, PADDLE1_Y, PADDLE_WIDTH, PADDLE_HEIGHT, PADDLE1_COLOR, PADDLE1_SPEED)
	this.paddle2 = new Paddle(PADDLE2_X, PADDLE2_Y, PADDLE_WIDTH, PADDLE_HEIGHT, PADDLE2_COLOR, PADDLE2_SPEED)
	this.ball = new Ball(BALL_X, BALL_Y, BALL_WIDTH, BALL_HEIGHT, BALL_COLOR, BALL_INIT_SPEED)
	
	for (let actor of [this.paddle1, this.paddle2, this.ball]) {
	  this.add(actor)
	}
  }


  private updatePaddle2(engine: ex.Engine) {
	if(engine.input.keyboard.isHeld(ex.Input.Keys.Left)) {
	  this.paddle2.moveLeft()
	}
	else if(engine.input.keyboard.isHeld(ex.Input.Keys.Right)) {
	  this.paddle2.moveRight()
	}
	else {
	  this.paddle2.moveNo()
	}	
  }

  private updatePaddle1(engine: ex.Engine) {
	
  }

  private updateBallOut(engine: ex.Engine) {
	if(this.ball.y <= 0) {
	  this.paddle1.restart()
	  this.paddle2.restart()
	  this.ball.restart(-1)
	}

	if(this.ball.y >= WIN_HEIGHT) {
	  this.paddle1.restart()
	  this.paddle2.restart()
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


	// paddle1 collision
	if(this.ball.collides(this.paddle1)) {
	  this.ballCollision(this.paddle1)
	}

	if(this.ball.collides(this.paddle2)) {
	  this.ballCollision(this.paddle2)
	}





  }


}




