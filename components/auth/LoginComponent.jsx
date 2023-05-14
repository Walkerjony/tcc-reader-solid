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