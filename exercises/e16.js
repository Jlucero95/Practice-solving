// see e16.md

export function find(array, callback) {
  let findTrue = [];

  for (let firstTrue of array){
    if (callback(firstTrue)){
      findTrue.push(firstTrue)
    }
  }

  for(let i = 0; i < array.length; i++){
    if((findTrue.v = true) && (findTrue.id = 2)){
      return findTrue[0]
    } else {
      return undefined
    }
  }


  return findTrue[0]
}
