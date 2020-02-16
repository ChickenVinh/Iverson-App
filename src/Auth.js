import Cookies from 'js-cookie'

const Auth = {
    authenticate() {
      //send cre to server and validate
      Cookies.set('user', 'user')
      this.isAuthenticated = true;
    },
    getAuth() {
        const user = Cookies.get('user');
        if(user){
          return true;
        }else{
          return false;
        }
      }
  };

  export default Auth;