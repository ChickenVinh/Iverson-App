import Cookies from 'js-cookie'

const Auth = {
    authenticate() {
      Cookies.set('user', 'user')
      //connect to server
      //check credentials
      //create cookie
      //change is authenticated
      //refresh
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