const keys = (obj) => {
    return Object.entries(obj).map(item => item[0]);
  };
  
  const obj = {a: 1, b: 2, c: 3};
  
  
  console.log(keys(obj));