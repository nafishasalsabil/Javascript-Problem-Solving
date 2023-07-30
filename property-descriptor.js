let person = {};

Object.defineProperty(person, "name", {
  value: "Jonas"
});

let descriptor = Object.getOwnPropertyDescriptor(person, 'name');

console.log( JSON.stringify(descriptor,null,2) );
//writable – if true, the value can be changed
//enumerable – if true, then listed in loops
//configurable – if true, the property can be deleted and these attributes can be modified