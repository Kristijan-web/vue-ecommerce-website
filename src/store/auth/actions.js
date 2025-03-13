export default{
    registerUser(context,payload){
        context.commit('setUser',payload)
    },
    loginUser({ getters, commit }, payload) {
      const registeredUsers = getters.getUser;
  
      if (registeredUsers && registeredUsers.length > 0) {
          const matchedUser = registeredUsers.find(user => 
              user.email === payload.email && user.password === payload.password
          );
  
          if (matchedUser) {
              commit('setLoggedUser', matchedUser);
              return { success: true };
          }
      }
  
      return { success: false, message: 'Login information does not match' };
  }
  
}