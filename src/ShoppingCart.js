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

//const cart = new ShoppingCart()
//cart.addItems('pizza', 2, 5.30)
//const cart1 = cart.clone()
//console.log(cart1)
//

module.exports.ShoppingCart = ShoppingCart
