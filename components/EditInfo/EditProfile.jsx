import { createEffect, createSignal, onMount } from 'solid-js';
import axios from 'axios';
import { useNavigate } from '@solidjs/router';
import { useParams } from '@solidjs/router';
import toast, { Toaster } from 'solid-toast';
import Header from '../home/Header';

function RegisterComponent() {
  const navigate = useNavigate();
  const [name, setName] = createSignal('');
  const [username, setUsername] = createSignal('');
  const [userId, setUserId] = createSignal('');
  const [aboutYou, setAboutYou] = createSignal('');
  const [isLoggedIn, setIsLoggedIn] = createSignal(false);
  const { id } = useParams()

  const notify = () => toast.success('Editado');

createEffect(() => {
  const getUserById = async () => {
    axios.get(`http://localhost:8001/getUser/${id}`)
    .then((res) => {
      console.log(res)
    })
}
  getUserById()
}, [id])
    

  onMount(async () => {
    try {
      if (typeof user == 'string') {
        console.log(user)
        setUserId(user);
        setIsLoggedIn(true);
      } else {
        setUserId('');
        setIsLoggedIn(false);
      }
      const usernameUser = localStorage.getItem("user");
      const nameUser = localStorage.getItem("name");
      const aboutYouUser = localStorage.getItem("aboutyou");

      if (username !== undefined) {
        setUsername(usernameUser);
        setIsLoggedIn(true);
      } else {
        setUsername('');
      }
      if (name !== undefined) {
        setName(nameUser);
      } else {
        setName('');
      }
      if (aboutYou !== undefined) {
        setAboutYou(aboutYouUser);
      } else {
        setAboutYou('');
      }
    } catch (error) {
      console.log(error);
    }
  });
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8001/update-user/${id}` , {
        name: name(),
        username: username(),
        aboutYou: aboutYou()
      }).then((res) => {
        console.log(res.data)
        localStorage.setItem("user", res.data.user);
        localStorage.setItem("name", res.data.name);
        localStorage.setItem("aboutyou", res.data.aboutYou)
        localStorage.setItem("id", res.data.id)
        notify()
        navigate('/', 2000);
      }); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <Header/>
    <section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
        <section class="bg-white dark:bg-gray-900">
  <div class="max-w-2xl px-4 py-8 mx-auto lg:py-16">
      <h2 class="mb-4 text-xl font-bold text-gray-900 dark:text-white">Editar Dados da Conta</h2>
      <form method='post' onSubmit={handleSubmit}>
          <div class="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <div class="sm:col-span-2">
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seu Nome</label>
                  <input  
                         onchange={(e) => setName(e.target.value)} type="text" name="name" id="name"  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  placeholder="Type product name" required=""/>
              </div>
              <div class="w-full">
                  <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome de Usuário</label>
                  <input  value={username()}
                         onchange={(e) => setUsername(e.target.value)} type="text" name="username" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"  placeholder="Product brand" required=""/>
              </div>

              <div class="sm:col-span-2">
                        <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sobre Você</label>
                        <textarea name = "aboutYou" id="aboutYou"
                        value={aboutYou()}
                        onChange={(e) => setAboutYou(e.target.value)} rows="5" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Fale um pouco dos livros e gêneros que você gosta"></textarea>                    
                    </div>
              
            </div>

            <div class="flex items-center space-x-4">
          <button type="submit" class="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              <svg aria-hidden="true" class="mr-1 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd"></path></svg>
              Editar
          </button>   
      </div>
      </form>
  </div>
</section>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5  lg:flex">
        <section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 border-t-4 border-indigo-500 border-b-4 border-indigo-500 mx-auto max-w-2xl lg:py-16">
      <h2 class="mb-2 text-xl font-semibold leading-none text-gray-900 md:text-2xl dark:text-white">Suas informações</h2>
      <dl>
          <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Sobre você</dt>
          <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
          {isLoggedIn() ? (
                <>
                <div class="flex items-center">
                  <h1 class="mr-2">{aboutYou()}  </h1>
                </div>
                </>
              ) : (
                <h1> Registrar-se</h1>
              )}
              </dd>
      </dl>
      <dl class="flex items-center space-x-6">
          <div>
              <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Seu nome de usuário</dt>
              <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400"> 
              {isLoggedIn() ? (
                <>
                <div class="flex items-center">
                  <h1 class="mr-2">{username()}  </h1>
                </div>
                </>
              ) : (
                <h1> Registrar-se</h1>
              )}</dd>
          </div>
          <div>
              <dt class="mb-2 font-semibold leading-none text-gray-900 dark:text-white">Seu Nome</dt>
              <dd class="mb-4 font-light text-gray-500 sm:mb-5 dark:text-gray-400">
              {isLoggedIn() ? (
                <>
                <div class="flex items-center">
                  <h1 class="mr-2">{name()}  </h1>
                </div>
                </>
              ) : (
                <h1> Registrar-se</h1>
              )}
              </dd>
          </div>
      </dl>
    
  </div>
</section>
        </div>                
    </div>
</section>
</>
  );
}

export default RegisterComponent;