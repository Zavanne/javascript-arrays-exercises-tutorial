let arr = [45,67,87,23,5,32,60];

// Your code here
let reversedArr = [];

for (let x = arr.length - 1; x>=0; x--){
    reversedArr.push(arr[x]);
}

console.log(reversedArr);