import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export default{
    namespaced: true,
    state() {
        return {
            user: [
                {
                    email: "bondzulicfilip@gmail.com",
                    name: "Filip",
                    password: "sifra1234"
                }
            ],
            loggedUser: null
        };
    },
    getters,
    mutations,
    actions
}
