let calculator ={
   
    add: function(x,y){
        console.log(`${x} + ${y} = ${x + y}`);
    },
    sub: function(x,y){
        console.log(`${x} - ${y} = ${x - y}`);
    },
    mul: function(x,y){
        console.log(`${x} * ${y} = ${x * y}`);
    },
    div: function(x,y){
        console.log(`${x} / ${y} = ${x / y}`);
    }
};

calculator.add(10,20);
calculator.sub(100,20);
calculator.mul(10,20);
calculator.div(10,2);