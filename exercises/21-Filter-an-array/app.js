let allNames = ["Romario", "Boby", "Roosevelt", "Emiliy", "Michael", "Greta", "Patricia", "Danzalee"];

// Your code here

let resultingNames = allNames.filter(function(name){

    name = name.toLowerCase();

    if(name[0] == 'r'){
        return name;
    }
});

let resultingNames2 = allNames.filter((name) => name[0].toLowerCase() == 'r');

resultingNames = allNames.filter((name) => name[0].toLowerCase() == 'r')

console.log(resultingNames);
console.log(resultingNames2);
