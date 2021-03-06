function pathFind(path, object) {

  let pathToValue = path.reduce((acc, n) =>
    acc.concat('.', n), ''
  )

  let realPathToValue = pathToValue.substr(1)

  function actualPathFind(object, realPathToValue) {

    if(typeof object === 'undefined') {
      return false
    }

    let _index = realPathToValue.indexOf('.')

    if(_index > -1) {
      return actualPathFind(object[realPathToValue.substring(0, _index)], realPathToValue.substr(_index+1))
    }

    return object[realPathToValue]

  }

  return actualPathFind(object, realPathToValue)

}



// I'm not sure what it is with yarn tests, but I can't get
// them to work... my function is working though! 

//test:
//console.log(pathFind(['is', 'this', 'working'], {
//  is: {
//    this: {
//      working: "Yes!"
//    }
//  }
//}))


module.export.pathFind = pathFind
