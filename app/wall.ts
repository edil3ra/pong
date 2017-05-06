import * as ex from 'excalibur'

export class Wall extends ex.Actor {
  onInitialize(engine: ex.Engine) {
	this.collisionType = ex.CollisionType.Fixed
  }
}
