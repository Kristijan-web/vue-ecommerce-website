export default{
    setUser(state,user){
      state.user.push(user);
    },
    clearLoggedUser(state) {
        state.loggedUser = null;
        localStorage.removeItem('user');
      },
      setLoggedUser(state, user) {
        state.loggedUser = user;
        localStorage.setItem('user', JSON.stringify(user));
      }
}