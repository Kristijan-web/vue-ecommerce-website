export default{
    getUser(state){
        return state.user
    },
    isLoggedIn(state) {
        return state.loggedUser !== null || localStorage.getItem('user') !== null;
    },
    getUserFromLocalStorage(){
        return JSON.parse(localStorage.getItem('user'))
    },
    isAdmin(state) {
        const user = state.loggedUser || JSON.parse(localStorage.getItem('user'));
        return user && user.email === 'bondzulicfilip@gmail.com';
      }
}