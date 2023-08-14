const Fibo = {
    n:5,
    [Symbol.iterator]:function(){
        let i=1,old=0,new1=0;
        return{
            next:()=>{
                if(i++ <=this.n){
                    [old,new1]=[new1,(old+new1) || 1];
                    return {value:old,done:false}
                }
                else{
                    return {done:true}
                }
            }
        }
    }
}

for(let num of Fibo){
    console.log(num);
}