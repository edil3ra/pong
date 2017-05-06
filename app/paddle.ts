import * as ex from 'excalibur'


export class Paddle extends ex.Actor{
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
  
  onInitialize(_engine: ex.Engine): void {
	// this.collisionType = ex.CollisionType.Fixed
  }

  public restart() {
	this.x = this.initX
	this.y = this.initY
  }
  
  public moveNo(): void {
	this.vel.setTo(0, 0) 
  }
  
  public moveLeft(): void {
	this.vel.setTo(-this.speed, 0) 
  }

  public moveRight(): void {
	this.vel.setTo(this.speed, 0) 
  }
  
}

