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
  console.log (item + ' has been added to your cart.')
  return cart;
}

function viewCart() {
  var tmpCart = cart;
  if(!tmpCart || !tmpCart.length) {
    return 'Your shopping cart is empty.';  
  }
  
  var result = 'In your cart, you have ';
  
  for(var item of tmpCart) {
    if(tmpCart.length > 1 && item !== tmpCart[0]) {
      result += ', ';
    }
    if(tmpCart.length > 1 && item === tmpCart[tmpCart.length-1]) {
      result += 'and ';
    }
    result += item.itemName + ' at $' + item.itemPrice;
  }
  result += '.';
  return result;
}

function total() {
  
  var result = 0;
  for (var item of cart)
  {
    result += item.itemPrice;
  }
  return result;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
