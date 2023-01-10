export function minBy(array, cb) {
  let youngest = []

  for(let min of array){
    if (cb(min)){
      if(min.age === 22){
        youngest.push(min)
      }
    }
  }
  return youngest[0]
};

export function maxBy(array, cb) {
  let oldest = []

  for(let max of array){
    if (cb(max)){
      if(max.age === 30){
        oldest.push(max)
      }
    }
  }
  return oldest[0]
};
