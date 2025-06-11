//2. Create a class Shape with properties width and height and methods getArea(). Create two classes Rectangle and Triangle that inherit from the Shape class and implement the getArea() method for their respective shapes.

class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {}
}

class Rectangle extends Shape {
  constructor(width, height){
  super(width, height) }
  getArea() {
    return this.width * this.height;
  }
}
class Triangle extends Shape {
  constructor(width, height){
  super(width, height) 
  }
  getArea() {
    return (1 / 2) * (this.width * this.height);
  }
}
// const area=new Shape(4,5);
const rec = new Rectangle(4, 5);
const triangle = new Triangle(6, 2);
console.log(rec.getArea());
console.log(triangle.getArea());


