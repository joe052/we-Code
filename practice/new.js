function removeProperty(obj, prop) {
  const z = obj[prop];
  let x = true
  if(z == null){
    x = false;
  };
  console.log(z);
  return x;
}

let person = {
  firstname: "john",
  lastname: "Doe",
  age: 30
};
/*const {firstname} = person;
const x  = firstname;
console.log(x);
//console.log(person);*/

const status = removeProperty(person,"lastname");
console.log(status);