export default {
  addToCart({ state, commit }, { product, quantity }) {
    let cart = [...state.cart];
    const cartItemIndex = cart.findIndex(item => item.id === product.id);
    if (cartItemIndex !== -1) {
        cart[cartItemIndex].quantity = cart[cartItemIndex].quantity + quantity;
    } else {   
        cart.push({
            ...product,
            quantity: quantity
        });
    }

    commit('setCart', cart);
},

      updateCart({ commit }, item) {
        commit('setUpdatedCart', item);
      },
      removeFromCart({ commit }, item) {
        commit('removeCartItem', item);
      },
      clearCart({ commit }) {
        commit('setCart', []); 
        localStorage.setItem('cart', JSON.stringify([]));
      }
}