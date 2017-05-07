import * as ex from 'excalibur'

export class Score extends ex.Label {
  public count: number

  onInitialize(engine: ex.Engine): void {
	this.count = 0
	this.fontFamily = "Arial";
	this.fontSize = 30;
	this.color = ex.Color.White;
	this.text = this.count.toString()
  }

  add(): void {
	this.count += 1
	this.text = this.count.toString()
  }
  
}
