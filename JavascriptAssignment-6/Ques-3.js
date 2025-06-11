// 3.1 Create a class Person with properties name, age, gender, and interests. Add a method greeting() that returns a string introducing the person.
//  Also add a method farewell() that returns a string saying goodbye to the person.
class Person {
  constructor(name, age, gender, interests) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }
  greeting() {
    console.log(
      `Hello ,My name is ${this.name} and I am ${this.age} years old.`
    );
  }
  farewell() {
    console.log(
      `It's great to meet everyone . I ${this.name} saying goodbye to everyone.`
    );
  }
}

const person = new Person("Raj", 20, "Male", "Playing Cricket");
person.greeting();
person.farewell();

class Student extends Person {
  constructor(name, age, gender, interests,studies) {
    super(name, age, gender, interests);
    this.studies = studies;
  }
  greeting() {
    console.log(
      `Hello ,My name is ${this.name} and I am ${this.age} years old and I studied ${this.studies}`
    );
  }
}

const student = new Student("Raj", 20,"Male","Watching Tv","BCA");
student.greeting();

class Teacher extends Person {
  constructor(name, age, gender, interests,teach) {
    super(name, age, gender, interests);
    this.teach = teach;
  }
  farewell() {
    console.log(`the teacher use to teach ${this.teach}`);
  }
}
const teaching = new Teacher("Raj", 20,"Male","reading","Science");
teaching.farewell();
