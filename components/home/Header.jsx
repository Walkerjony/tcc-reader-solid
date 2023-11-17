import { createSignal, onMount } from 'solid-js';
import axios from 'axios';
import { useNavigate } from '@solidjs/router';
import { useParams } from '@solidjs/router';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = createSignal(false);
  const [userId, setUserId] = createSignal('');
  const navigate = useNavigate()
  const id = localStorage.getItem("id");

  const fetchUser = async () => {
    axios.get(`http://localhost:8001/getUserById/${id}`)
      .then((res) => {
        console.log(res)
        console.log(id)
        navigate(`edit/${id}`)
      })
}

onMount(async () => {
    try {
      const user = localStorage.getItem("name");
      if (user) {
        setUserId(user);
        setIsLoggedIn(true);
      } else {
        setUserId('');
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.log(error);
    }
  });

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserId('');
  };

  return (
    <header>
      <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="/" class="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Reader</span>
          </a>
          <div class="flex items-center lg:order-2">
            <a href="#" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
              {isLoggedIn() ? (
                <>
                  <div class="flex items-center">
                  <h1 class="mr-2">Olá, {userId()} | </h1>
                  <button onClick={handleLogout} class="text-red-500 hover:text-red-700">Logout</button>
                  <button  onClick={fetchUser} class="text-blue-500 hover:text-blue-700 ml-2">Meu Perfil</button>
                </div>
                </>
              ) : (
                <h1> <a href="/register">Registrar-se</a> </h1>
                
              )}
            </a>
            {/* Rest of the code */}
          </div>
          {/* Rest of the code */}
        </div>
      </nav>
    </header>
  );
}

export default Header;
