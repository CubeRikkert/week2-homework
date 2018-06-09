class SchoppingCart = {
  constructor(cart, items) {
    this.cart = cart
    this.items = []
  }
  cart.getItems(itemName, quantity, price) => {
    let newItem = { name: this.itemName, quantity: this.quantity, pricePerUnit: this.pricePerUnit }
    return items.push(newItem)
  }
  cart.clear() => {return this.item.lenght = 0}
  cart.clone() => {
    const shoppingCart = new ShoppingCart(...args)
    return new ShoppingCart(...args)
  }
}











module.exports.ShoppingCart = ShoppingCart
