function first_index_last_index_10(numb)
{
  let end_position = numb.length - 1;
  return numb[0] == 10 || numb[end_position] == 10;
}
console.log(first_index_last_index_10([1, 3, 5, 10]));
console.log(first_index_last_index_10([10, 3, 5, 7]));
console.log(first_index_last_index_10([2, 4, 6, 9]));