function pathFind(path, object) {
  let newObj = []
  let currentPathKey = 0
  let lookForIt = Object.keys(object).reduce((newObj, objKey) => {
    if (objKey.value === path[0]) {
      return newObj = [ objKey.value ]
      currentPathKey++
      console.log('first statement')
    } if (objKey.value === path[currentPathKey]) {
      return newObj = [ objKey.value ]
      console.log('second statement')
    } return NewObj
    console.log('last statement')
  })
  return newObj
}



console.log(pathFind(['is', 'this', 'working?'], {
  is: {
    this: {
      working: "Yes!"
    }
  }
}))








//module.export.pathFind = pathFind
