import { createSignal } from 'solid-js'
import toast, { Toaster } from 'solid-toast';
import axios from 'axios';
import { useNavigate } from '@solidjs/router'


export default function userLogin() {

  const [name, setName] = createSignal('')
  const [username, setUsername] = createSignal('')
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [toastError, setToastError] = createSignal('');
  const [toast, setToast] = createSignal('');
  const navigate = useNavigate();

  const showToastError = () => {
    setToastError(true);

    setTimeout(() => {
      setToastError(false);
    }, 3000);
  };

  const checkToast = () => {
    setToast(true);
    setTimeout(() => {
      setToast(false);
    }, 3000);
  }; 
  
  const handleLogin = async (e) => {
    e.preventDefault();
    var response = await axios.post("http://localhost:8001/login-user", {
        name: name(),
        username: username(),
        email: email(),
        password: password(),
      }).then(response => {
        localStorage.setItem("user", response.data.user);
        localStorage.setItem("name", response.data.name);

        console.log(response.data)
        navigate('/');
      })
  }
  return (
    <section class="bg-no-repeat  bg-cover bg-[url('https://images.unsplash.com/photo-1502485019198-a625bd53ceb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGFyayUyMGxpYnJhcnl8ZW58MHx8MHx8fDA%3D&w=1000&q=80')]">
    <div class=" flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"> </img>
            Reader    
        </a>
        <div class="w-full border-4 border-light-blue-300 border-opacity-100 bg-opacity-75 md:bg-opacity-50 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 ">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Criar Conta
                </h1>
                <form class="space-y-4 md:space-y-6" onSubmit={handleLogin} action="#" method='POST'>
                   
                    <div>
                        <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome de Usuário</label>
                        <input 
                        type="text" 
                        name="username" 
                        id="username" 
                        value={username()}
                        onchange={(e) => setUsername(e.target.value)}
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Joao_Bastos" /> 
                    </div>
                    <div>
                        <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seu E-mail</label>
                        <input 
                        type="text" 
                        name="email" 
                        id="email" 
                        value={email()}
                        onchange={(e) => setEmail(e.target.value)}
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email@gmail.com" /> 
                    </div>
                    <div>
                        <label for="" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sua Senha</label>
                        <input 
                        type="text" 
                        name="email" 
                        id="password" 
                        value={password()}
                        onchange={(e) => setPassword(e.target.value)}
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Senha" /> 
                    </div>
                    <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Criar Conta</button>
                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                        Já possui conta? <a href="#" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Entrar Aqui</a>
                    </p>
                </form>
            </div>
        </div>
    </div>
  </section>
  )
}
