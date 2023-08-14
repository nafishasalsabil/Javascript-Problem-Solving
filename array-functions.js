const aos = ['Hello','this','is','an','array'];

const reformedAos = aos.map((names)=>names.length);

console.log(reformedAos);

const result = aos.filter((word) => word.length%2==0);

console.log(result);