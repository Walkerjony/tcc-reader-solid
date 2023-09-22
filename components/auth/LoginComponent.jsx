<<<<<<< HEAD
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
=======
function loginComponent(){
    return(
        <section class="bg-center bg-no-repeat bg-[url('https://media.thegospelcoalition.org/wp-content/uploads/2023/04/04185025/build-theological-library-1920x1080.jpg')] bg-gray-700 bg-blend-multiply">
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
            <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <div class="flex min-h-full  flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 22 22" strokeWidth={1.5}  stroke="currentColor" class="mx-auto h-10 w-auto w-6  sm:h-9 h-6 dark:text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
</svg>
    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">Entre na sua conta</h2>
  </div>
  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form class="space-y-6" action="#" method="POST">
      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-white">E-mail</label>
        <div class="mt-2">
          <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
        </div>
      </div>
      <div>
          <label for="password" class="block text-center text-sm font-medium leading-6 text-white">Senha</label>
        <div class="mt-2">
          <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"> </input>
        </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-white dark:bg-blue-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Entrar</button>
      </div>
    </form>

    <p class="mt-10 text-center text-sm text-gray-500">
      Nao possui conta?
      <a href="#" class="font-semibold m-4 leading-6 text-indigo-600 hover:text-indigo-500">Crie sua Conta</a>
    </p>
  </div>
</div>
            </div>
        </div>
    </section>
)
}export default loginComponent;
>>>>>>> master
