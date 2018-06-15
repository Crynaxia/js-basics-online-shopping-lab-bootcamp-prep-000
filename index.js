var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.ceil(Math.random() * 100);
  cart.push({ itemName: item, itemPrice: price })
  console.log (`${item} has been added to your cart.`)
  return cart;
}

function viewCart() {
  var tmpCart = cart;
  if(!tmpCart || !tmpCart.length) {
    return 'Your cart is empty.';  
  }
  
  string result = 'In your cart, you have';
  
  for(var item of tmpCart) {
    
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
