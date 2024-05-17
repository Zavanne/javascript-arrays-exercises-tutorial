// Your code here

function lyricsGenerator(beats){

    let lyrics = ""
    let counter = 0;

    beats.forEach(element => {
        if (element == 0){
            lyrics += "Boom ";
            counter = 0;
        } else if (element == 1){
            lyrics += "Drop the bass ";
            counter += 1;
        }if(counter == 3){
            lyrics += "!!!Break the bass!!! "
            counter = 0;
        }
    });

    return lyrics
}

// Don't change anything below this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))
