// Shopping cart
let cart = []
let price = []
let tot = 0

// Add a Item to cart
const addItem = (item) => {
    cart.push(item)
}

// Add Price for an item
const addPrice = (amount) => {
    price.push(amount)
}

// Calculate total
const total = () => {
    for (i=0; i< price.length; i++) {
        tot +=price[i]
    }
}

// Applying discount
const discount = () => {
    for (i=0; i< price.length; i++) {
        tot +=price[i]
    }
}

// Adding a few items
addItem('milk')
addItem('bread')
console.log(cart)

// Adding items price
addPrice(5)
addPrice(5)
console.log(price)

// calculating total and calculating discounted total
total()
discount()
console.log(discount())