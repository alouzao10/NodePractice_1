const person = {
  name: 'Bob',
  age: 30
};

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log('Hello: ' + this.name + ' is ' + this.age);
  }
}

module.exports = Person;
