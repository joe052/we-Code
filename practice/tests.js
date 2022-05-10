 var Person = function(firstname,lastname,age){
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
};

p = new Person("John","Doe",50);

 Person.prototype.sayHello = function(){
   console.log(`Hello ${this.firstname} ${this.lastname}!`);
 }

p.sayHello();

/*let person = {
  firstname: "john",
  lastname: "Doe",
  age: 30
};

person.sayHello = function(){
   console.log(`Hello ${this.firstname} ${this.lastname}!`);
};

person.sayHello();*/