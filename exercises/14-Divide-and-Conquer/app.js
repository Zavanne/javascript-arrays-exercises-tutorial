let listOfNumbers = [4, 80, 85, 59, 37, 25, 5, 64, 66, 81, 20, 64, 41, 22, 76, 76, 55, 96, 2, 68];

// Your code here
function mergeTwoList (array){
    let oddArray = [];
    let evenArray = [];

    for(item in array){
        if(array[item] % 2 == 0){
            evenArray.push(array[item]);
        } else {
            oddArray.push(array[item]);
        }

    } 

    let finalArray =[].concat(oddArray, evenArray);

        return finalArray
}

console.log(mergeTwoList(listOfNumbers));