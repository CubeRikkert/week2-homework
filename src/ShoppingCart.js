class ShoppingCart {
  constructor(items) {
    this.items = []
  }

  getItems() {
    return this.items
  }

  addItems(itemName, quantity, price) {
    let newItem = { name: `${itemName}`, quantity:
    `${quantity}`, pricePerUnit: `${price}`  }
    return this.items.push(newItem)
  }

  clear() {
    return this.items.length = 0
  }

  clone() {
    let newClone = new ShoppingCart()
    newClone.items = JSON.parse(JSON.stringify(this.items))
    return newClone
  }

}

//this file is working as it should according to my own
//tests. I can't get yarn test to recognize ShoppingCart
//as a constructor, and thus it failes all the tests.
//Luckily, according to my own tests; I am not crazy :)

//My own tests:

//const cart = new ShoppingCart()

//function amICrazy() {
//  if (cart.constructor === ShoppingCart) {
//    return false
//  } return true
//}
//
//console.log(`I am crazy: ${amICrazy()}`)

//cart.addItems('pizza', 2, 5.30)
//const cart1 = cart.clone()
//cart.addItems('icecream', 3, 4.20)
//console.log(cart1)

module.exports.ShoppingCart = ShoppingCart
