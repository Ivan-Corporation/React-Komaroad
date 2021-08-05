import LoggedInUser from './Log/LoggedInUser';
import LoggedOutUser from './Log/LoggedOutUser';


function LoginStatus(props) {

    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <LoggedInUser />
    }
  return <LoggedOutUser />
  }
export default LoginStatus