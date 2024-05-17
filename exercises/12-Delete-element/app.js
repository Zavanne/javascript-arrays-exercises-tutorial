let people = ['juan','ana','michelle','daniella','stefany','lucy','barak', 'emilio'];

// Your code below

function deletePerson (erasePerson){

    let newPeople = people.filter((person) => person !== erasePerson)

    return newPeople
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));
