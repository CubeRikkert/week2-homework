class ShoppingCart {
  constructor(name, items) {
    this.name = 'ShoppingCart'
    this.items = []
  }

  getItems() {return this.items}

  addItems(itemName, quantity, price) {
    let newItem = { name: `${itemName}`, quantity:
    `${quantity}`, pricePerUnit: `${price}`  }
    if (addItem(...args) === undefined) {
      return this.items
    } return this.items.push(newItem)
  }

  clear() {return this.items.length = 0}

  clone() {
    return new ShoppingCart(...args)
  }

}




module.exports.ShoppingCart = ShoppingCart
