import * as ex from 'excalibur'
import { BALL_INIT_SPEED } from './config'

export class Ball extends ex.Actor {

  private speed: number
  private initX: number
  private initY: number


  constructor(x: number, y: number,
			  width: number, height: number,
			  color: ex.Color, speed: number) {
	super(x, y, width, height, color)
	this.initX = x
	this.initY = y
	this.speed = speed
  }
  
  onInitialize(engine: ex.Engine): void {
    this.collisionType = ex.CollisionType.Elastic
	this.restart(1)
  }


  restart(direction :number): void {
	this.x = this.initX
	this.y = this.initY
	this.speed = BALL_INIT_SPEED
	this.vel.setTo(0, direction * this.speed)
  }


}

