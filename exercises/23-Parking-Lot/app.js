let parkingState = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]



// Your code here

function getParkingLotState(parkingState){
  let state = {
    totalSlots:  0,
    availableSlots: 0,
    occupiedSlots: 0,
  }
  for (let row = 0; row < parkingState.length; row++) {
    for (let col = 0; col < parkingState[row].length; col++) {
      if(parkingState[row][col] == 2){
        state.availableSlots += 1;
        state.totalSlots += 1;
      } else if (parkingState[row][col] == 1){
        state.occupiedSlots += 1;
        state.totalSlots += 1;
      }
    }
  }

  return state
}

console.log(getParkingLotState(parkingState))
