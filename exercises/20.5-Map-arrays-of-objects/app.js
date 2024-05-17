let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,12,14) },
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];

let simplifier = function(person) {
	// Your code here
	const birthYear = new Date(person.birthDate).getFullYear();
    const birthMonth = new Date(person.birthDate).getMonth();
    const birthDay = new Date(person.birthDate).getDate();
    
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    let age = currentYear - birthYear;

    if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
        age--;
    }
	return `Hello, my name is ${person.name} and I am ${age} years old`
};

console.log(people.map(simplifier));
