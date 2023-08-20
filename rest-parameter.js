function sumAll(...args) {
  let sum = 0;

  for (let arg of args) sum += arg;

  return sum;
}

console.log(sumAll(1));
console.log(sumAll(2, 3, 4));


//spread turns array into a list of arguments

let arr1 = [1, -2, 3, 4];
let arr2 = [15, 3, -8, 1];

console.log( Math.max(...arr1, ...arr2) ); 
