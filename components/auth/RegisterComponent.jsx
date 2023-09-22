
import { createSignal } from 'solid-js';
import axios from 'axios';
import { useNavigate } from '@solidjs/router';

function RegisterComponent() {
  const navigate = useNavigate();
  const [name, setName] = createSignal('');
  const [username, setUsername] = createSignal('');
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [aboutYou, setAboutYou] = createSignal('');



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8001/signup-user' , {
        name: name(),
        username: username(),
        email: email(),
        aboutYou: aboutYou(),
        password: password(),     
      }).then((res) => {
        console.log(res.data)
        // localStorage.setItem("user", res.data.user);
        // localStorage.setItem("name", res.data.name);
        localStorage.setItem("aboutyou", res.data.aboutYou)
        localStorage.setItem("id", res.data.id)
        navigate('/', setTimeout(2000));
      }); 

     
  }catch(error){
    console.log(error);
  };
 }

  return (
    <section class="bg-no-repeat bg-cover bg-[url('https://images.unsplash.com/photo-1502485019198-a625bd53ceb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGFyayUyMGxpYnJhcnl8ZW58MHx8MHx8fDA%3D&w=1000&q=80')]">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"> </img>
            Reader    
        </a>
        <div class="w-full h-auto border-4 border-light-blue-300 border-opacity-100 bg-opacity-75 md:bg-opacity-50 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 ">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Criar Conta
                </h1>
                <form class="space-y-4 md:space-y-6" onSubmit={handleSubmit} action="#" method='POST'>
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seu Nome</label>
                        <input type="text"
                         name="name" 
                         id="name" 
                         value={name()}
                         onchange={(e) => setName(e.target.value)}
                         class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Fiódor" /> 

                    </div>
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
                    <div class="sm:col-span-2">
                        <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sobre Você</label>
                        <textarea name = "aboutYou" id="aboutYou"
                        value={aboutYou()}
                        onChange={(e) => setAboutYou(e.target.value)} rows="5" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Fale um pouco dos livros e gêneros que você gosta"></textarea>                    
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
  );
}  export default RegisterComponent;

