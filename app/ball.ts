import * as ex from 'excalibur'

export class Ball extends ex.Actor {

  private initSpeed: number
  private speed: number
  private initX: number
  private initY: number


  constructor(x: number, y: number,
			  width: number, height: number,
			  color: ex.Color, speed: number) {
	super(x, y, width, height, color)
	this.initX = x
	this.initY = y
	this.initSpeed = speed
	this.speed = speed
  }
  
  onInitialize(engine: ex.Engine): void {
	this.restart(1)
  }


  restart(direction :number): void {
	this.x = this.initX
	this.y = this.initY
	this.speed = this.initSpeed
	this.vel.setTo(0, direction * this.speed)
  }

  
}

