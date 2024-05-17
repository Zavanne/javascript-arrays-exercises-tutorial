// Your code here

function matrixBuilder(matrixSize){

    let matrix = []

    for (let x=0; x<matrixSize; x++){
        matrix[x] = []
        for (let y=0; y<matrixSize; y++){
            matrix[x][y] = Math.floor(Math.random() * 2 );
        }
    }

    return matrix;

}



// Do not change anything from this line down
console.log(matrixBuilder(5))
