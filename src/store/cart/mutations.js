export default{
    setCart(state, cart) {
        state.cart = cart;
        localStorage.setItem('cart', JSON.stringify(cart));
      }, 
      setUpdatedCart(state, item) {
        const cartItemIndex = state.cart.findIndex(cartItem => cartItem.id === item.id);
        
        if (cartItemIndex !== -1) {
          state.cart[cartItemIndex] = item; 
        }
    
        
        localStorage.setItem('cart', JSON.stringify(state.cart));
      },
      removeCartItem(state, item) {
        state.cart = state.cart.filter(cartItem => cartItem.id !== item.id);
    
        localStorage.setItem('cart', JSON.stringify(state.cart));
      }
}