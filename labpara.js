var numbers = 23617;
var check= 4;
function kthdigit(numbers,check)
{
	if (k <= 0)
	{
		document.write(-1);
		return;
	}
	var dig = String(numbers);
	if (check > dig.length)
	{
		document.write(-1);
	}
	else
	{
		var nbr = dig.charAt(dig.length - check)
		document.write(Number(nbr));
	}
}
kthdigit(numbers, check);

