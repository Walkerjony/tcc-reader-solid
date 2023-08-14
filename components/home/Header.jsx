import { createSignal, onMount } from 'solid-js';
import axios from 'axios';


function Header(){

  const [isLoggedIn, setIsLoggedIn] = createSignal(false);
  const [userId, setUserId] = createSignal('');

  onMount(async () => {
    try {
      const response = await axios.get('http://localhost:8001/user');
      const dataSession = response.data.ses;
      console.log(dataSession);
      setUserId(dataSession)
      setIsLoggedIn(true);    
    } catch (error) {
      console.log(error);
    }
    
  })
    return(
      <div>
      {isLoggedIn() ? (
        <h1>User ID: {userId()}</h1>
      ) : (
        <h1>User not logged in</h1>
      )}
    </div>
  );
}export default Header;
