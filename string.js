check = (x) => {
  if (x[0] === x[0].toUpperCase()) {
    return true;
  }
  else{
    return false;
  }
};

let x = "This strats with uppercase";

console.log(check(x));