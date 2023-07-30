let symb1 = Symbol("age");
let symb2 = Symbol("id");

let user = {
  name: "John",
  [symb1]: 30,
  [symb2]: 123
};

console.log( "Age: " + user[symb1] + " ID: "+user[symb2] );

user[symb1] = 20;

console.log( "Age: " + user[symb1] + " ID: "+user[symb2] );