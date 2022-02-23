let a = [ 2, 3, 6, 1 ,7];
  var dig=toString(a)
  console.log(dig)
  let sum=Array.from(dig)
  var ans = 0;
  const summ = a.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    ans
  );
  console.log(summ);