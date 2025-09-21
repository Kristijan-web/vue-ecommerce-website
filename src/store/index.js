import { createStore } from "vuex";
import products from "./products";
import auth from "./auth";
import cart from "./cart";

console.log("KOOOOOLEGA");

console.log("HALO");

export default createStore({
  modules: {
    products,
    auth,
    cart,
  },
});
