const myNums = [1,2,3,4,5];

let sum = 0,avg=0.0;

myNums.forEach( num => {
  sum += num;
})
avg=sum/myNums.length;

console.log("----Sum-----"+sum + "---Max---" + avg + "---Max----"+Math.max(...myNums) + "---Min----"+Math.min(...myNums)) ;