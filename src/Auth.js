import Cookies from 'js-cookie'

const Auth = {
    authenticate(email) {
      Cookies.set('user', email)
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