import { createStore } from "vuex";
import products from "./products";
import auth from "./auth";
import cart from "./cart";

console.log("KOOOOOLEGA");

export default createStore({
  modules: {
    products,
    auth,
    cart,
  },
});
