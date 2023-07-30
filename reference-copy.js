const originalObj = {
    name: ["Jonas"],
    age: 24,
    occupation:["student"],
  };

//   const copiedObj = originalObj;
//   copiedObj["name"]= "Martha";
//   console.log(copiedObj);
//   console.log(originalObj);

  const copiedObj2 = Object.assign({},originalObj);

  copiedObj2["name"]= "Martha";
  console.log(copiedObj2);
  console.log(originalObj);