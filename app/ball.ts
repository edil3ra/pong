import * as ex from 'excalibur'
import {BALL_MIN_SPEED, BALL_MAX_SPEED, BALL_FACTOR_SPEED} from './config'


export class Ball extends ex.Actor {
  private speed: number
  private initX: number
  private initY: number


  constructor(x: number, y: number,
			  width: number, height: number,
			  color: ex.Color) {
	super(x, y, width, height, color)
	this.initX = x
	this.initY = y
	this.speed = BALL_MIN_SPEED
  }
  
  public onInitialize(engine: ex.Engine): void {
	this.restart(1)
  }
  

  public restart(direction :number): void {
	this.x = this.initX
	this.y = this.initY
	this.speed = BALL_MIN_SPEED
	this.vel.setTo(0, direction * this.speed)
  }

  public updateSpeed(hitCount: number): void {
	const speed = BALL_MIN_SPEED + (hitCount * BALL_FACTOR_SPEED)
	this.speed = ex.Util.clamp(speed, BALL_MIN_SPEED, BALL_MAX_SPEED)
	this.vel =  this.vel.normalize().scale(this.speed)
  }

}

