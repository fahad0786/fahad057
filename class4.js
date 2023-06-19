a=sandwichcalculator(10,5);
function sandwichcalculator(bread,cheese){
    if(sandwich=bread/2 && cheese>1){
        return sandwich;

    }hfhhfa
    else{
        return cheese;
    };
    
}hdhadha

sandWich =(bread, cheese)=>{
    if (bread <2){
        return "as we know one sandWich needs atleast 2 breads";
    }
    let total_bread=parseInt(bread/2);
    if (total_bread==cheese){
        return "total sandWiches  "+total_bread+" from "+bread+" bread"; 
    }
    else if(total_bread>cheese)
    {
        return "according to available cheese "+cheese+" we have "+cheese+" sandWiches";
    }
    else
    {
        return "according to available bread "+total_bread+" we have "+total_bread+" sandWiches";
    }
}

console.log(sandWich(5,5)); 
