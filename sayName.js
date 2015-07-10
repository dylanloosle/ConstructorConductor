//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

  //code here
var Person = function(name, age){
  this.name = name;
    this.age = age;

};

//Now create three instances of Person with data you make up

  //code here
var person1 = new Person('Dylan', 24);
var person2 = new Person('Henry', 1);
var person3 = new Person('Madison', 24);

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
Person.prototype.sayName = function(name){
    alert(this.name);
};
person1.sayName();
