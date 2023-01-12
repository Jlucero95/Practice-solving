export function minBy(array, cb) {

  for(let minAge of array){
    if (cb(minAge) === 22 ){
      return minAge
    }
  }
};

export function maxBy(array, cb) {
  for(let maxAge of array){
    if (cb(maxAge) === 30){
      if(maxAge){
        return maxAge
      }
    }
  }
};
