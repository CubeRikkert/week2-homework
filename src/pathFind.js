function pathFind(path, object) {
  let result = []
  if (object.key === path[0]) {
    return
  }
}


//function pathFind(path, object) {
//  let newObj = ['newObj']
//  let currentPathIndex = 0
//  let lookForIt = Object.values(object).reduce((newObj, objValue) => {
//    if (objValue === path[1]) {
//      return newObj = [ `${objValue}` ]
//      currentPathIndex++
//    } if (objValue === path[currentPathIndex]) {
//      return newObj = [ `${objValue}` ]
//      console.log('second statement')
//    } return NewObj
//      console.log('last statement')
//  })
//  return newObj
//}



console.log(pathFind(['is', 'this', 'working?'], {
  is: {
    this: {
      working: "Yes!"
    }
  }
}))








//module.export.pathFind = pathFind
