// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
export function Size(width=80,height=60){
  this.width=width;
  this.height=height;
  
}
Size.prototype.resize=function (newWidth, newHeight)  {
    this.width=newWidth
    this.height=newHeight;
}

export function Position(x=0,y=0){
   this.x=x;
   this.y=y;
}
Position.prototype.move=function(newX,newY){
  this.x=newX;
  this.y=newY;
}

export class ProgramWindow {
  
  constructor() {
    this.screenSize=new Size(800,600);
    this.size=new Size();
    this.position=new Position();
  }
  resize(newSize){
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;

    this.size.width = Math.max(1, Math.min(newSize.width, maxWidth));
    this.size.height = Math.max(1, Math.min(newSize.height, maxHeight));
  }
  move(newPosition) {
    let maxX = this.screenSize.width - this.size.width;
    let maxY = this.screenSize.height - this.size.height;

    this.position.x = Math.max(0, Math.min(newPosition.x, maxX));
    this.position.y = Math.max(0, Math.min(newPosition.y, maxY));
  }
  
}

export function changeWindow(programWindow) {
  programWindow.size.width = 400;
  programWindow.size.height = 300;
  programWindow.position.x = 100;
  programWindow.position.y = 150;
  
  return programWindow;
}