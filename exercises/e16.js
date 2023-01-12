// see e16.md

export function find(array, callback) {
  for (let firstTrue of array){
    if (callback(firstTrue)){
      return firstTrue
    }
  }
}
