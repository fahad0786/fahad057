
function my_avg(...val){
    let sum = 0;
    let max = val[0];
    for(let i = 0;i<val.length ;i++)
    {
        sum += val[i];
        if(val[i]>max){
            max = val[i];
        }
    }hdhhdh
let avrge = (sum/(val.length)).toFixed(2);
return [max,avrge];

}
let result = my_avg(10,23,33,44,55,88,100);
console.log("Maxium value:",result[0]);
console.log("Avrage value:",result[1]);
