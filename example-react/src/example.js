let task=[1,4,6,4];

task=task.map((t,i)=>{
    if(i===2){
        return 9;
    }
    else{
        return t;
    }
})
console.log(task);