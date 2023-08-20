const person={
    name:"John",
    age:23,
    email:"a@gmail.com"
}

x = JSON.stringify(person)

console.log(x);

y = JSON.parse(x);
console.log(y.name);

