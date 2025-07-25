function stringChop(str, size) {
  // your code here
		let l = str.length;
	let array = [];
	if (str === false)
		return array;
	for (let i = 0; i < l; i += size) {
		array.push(str.slice(i, i + size));

	}
	return array; 
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
