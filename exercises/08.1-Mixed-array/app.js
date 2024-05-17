let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

// Your code here
let dataType = [];

for (item in mix){
    dataType.push(typeof(mix[item]))
}

console.log(dataType);