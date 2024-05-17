function sumTheElements(theArray) {
	let total = 0;
	// Your code here
	for(x in theArray){
		total += theArray[x];
	}

	return total;
}

console.log(sumTheElements([2,13,34,5]))