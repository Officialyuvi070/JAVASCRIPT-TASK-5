class Rectangle {
    // Constructor Method
    constructor(length, width) {
      this.length = length;
      this.width = width;
    }
//-------------------------------------------------------------------------------------------------------------------------  
    area() {
      return this.length * this.width;
    }
  
    perimeter() {
      return 2 * (this.length + this.width);
    }

    //Static methods are called directly on the class without creating an instance/object
    static Square(sideLength) { 
      return new Rectangle(sideLength, sideLength);
    }
  }
  
  // Example usage:
  const rectangle1 = new Rectangle(5, 10);
  const rectangle2 = Rectangle.Square(7);
  
  // Calculating properties using class methods
  const area1 = rectangle1.area();
  const perimeter1 = rectangle1.perimeter();
  const area2 = rectangle2.area();
  const perimeter2 = rectangle2.perimeter();
  
  console.log("Rectangle 1:");
  console.log(`Length: ${rectangle1.length}, Width: ${rectangle1.width}`);
  console.log(`Area: ${area1}, Perimeter: ${perimeter1}`);
  
  console.log("\nRectangle 2:");
  console.log(`Length: ${rectangle2.length}, Width: ${rectangle2.width}`);
  console.log(`Area: ${area2}, Perimeter: ${perimeter2}`);
//--------------------------------------------------------------------------------------------------------------------------------------
class info{
    // Constructor Method
    constructor(name, age, city){
        this.name = name;
        this.age = age;
        this.city = city;
    }
//-------------------------------------------------------------------------------------------------------------------------------------
    // instance method
    myinfo() {
        console.log(`My name is ${this.name}. I live in ${this.city}.`)
    }
//--------------------------------------------------------------------------------------------------------------------------------------
    // Computed Methods
    ['Age'](){
        console.log(`And I am ${this.age} years old`)
    }
//-------------------------------------------------------------------------------------------------------------------------------------
    // Getter Method
    myName(){
        return this.name;
    }
    myAge(){
       return this.age;

    }
    myCity(){
        return this.city;
    }
//-------------------------------------------------------------------------------------------------------------------------------------
    // Setter Method
    setAge(newAge){
        this.age = newAge;
    }
    setCity(newCity){
        this.city = newCity;
    }
}
// Create an object of random class
const obj1 = new info("Yuvraj", 22, "Jalandhar-City");

// Accessing Properties using getter methods
console.log(obj1.myName());
console.log(obj1.myAge());
console.log(obj1.myCity());

// Changing some properties using setter methods
obj1.setAge(23);
obj1.setCity("Chandigarh");

console.log(obj1.myAge());
console.log(obj1.myCity());

// Accessing properties using instance methods
obj1.myinfo();

// Accessing properties using computed methods
obj1.Age();