let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// Your code here

for(let x = 0; x < par.length; x++){
    let letter = par[x].toLowerCase();
    
    if (letter == " "){
        continue;
    } else if(letter in counts){
        counts[letter] += 1;
    } else {
        counts[letter] = 1;
    }
}

console.log(counts);
