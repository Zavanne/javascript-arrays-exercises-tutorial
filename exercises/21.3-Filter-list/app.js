let names = ['Liam','Emma','Noah','Olivia','William','Ava','James','Isabella','Logan','Sophia','Benjamin','Mia','Mason','Charlotte','Elijah','Amelia','Oliver','Evelyn','Jacob','Abigail','Lucas','Harper','Michael','Emily','Alexander','Elizabeth','Ethan','Avery','Daniel','Sofia','Matthew','Ella','Aiden','Madison','Henry','Scarlett','Joseph','Victoria','Jackson','Aria','Samuel','Grace','Sebastian','Chloe','David','Camila','Carter','Penelope','Wyatt','Riley'];

// Your code here

function filterByName (names, piece){

    let filteredNames = names.filter(function(name){
        if(name.toLowerCase().includes(piece)){
            return name;
        }
    });
    return filteredNames;  
}

function filterByName2 (names,piece){
    return names.filter((name)=>name.toLowerCase().includes(piece));
}

console.log(filterByName(names,'am'));

console.log(filterByName2(names,'ia'));
