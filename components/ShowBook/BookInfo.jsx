import { useLocation } from "@solidjs/router";


function BookInfo(props) {  
  const location = useLocation();
  // const book = JSON.parse(location.state.book)
  console.log(location)


  return(
<main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
  <div class="flex justify-between px-4 mx-auto max-w-screen-xl ">
      <article class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header class="mb-4 lg:mb-6 not-format">
              <address class="flex items-center mb-6 not-italic">
              </address>
              <h1 class="mb-4 text-3xl text-center font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">{location.state.title}</h1> <br />
              <p class="text-lg text-center font-medium text-gray-900 dark:text-white">Authors: <span class="italic">{location.state.authors}</span></p>
              <hr class="w-48 h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10 dark:bg-gray-700"> </hr>
          </header>     
          <p class="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">{location.state.description}</p>
      </article>
  </div>
</main>


  )
  {/* // return <h2> { location.state.description } { location.state.title } </h2>; */}
}export default BookInfo