import axios from "axios";
import { useLocation } from "@solidjs/router";
import { createSignal } from "solid-js";
import CommentForm from "./CommentForm";
import CommentList from "./CommentsList";

function BookInfo(props) {  
    const location = useLocation();
    const bookId = location.state.id
    const user = localStorage.getItem("user")
    const [liked, setLiked] = createSignal(false);
    const handleLike = async () => {
            await axios
            .post("http://localhost:8001/like-book", {
                bookId,
                user
             })
            .then((res) => {
            console.log('Liked', res)
        })
            .catch((error) => {
            console.log(error);
        });
    }

  return(
    <>
<main class="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
  <div class="flex justify-center px-4 mx-auto max-w-screen-xl h-full">
    <article class="w-full block max-w-2xl h-full min-h-screen format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
      <header class="mb-4 lg:mb-6 not-format">
        <address class="flex items-center mb-6 not-italic"></address>
        <h1 class="mb-4 text-3xl text-center font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
          <span class="italic">{location.state.title}</span>
        </h1>{" "}  
        <br />    
        <p class="text-lg text-center font-medium text-gray-900 dark:text-white">
          Authors: <span class="italic">{location.state.authors}</span>
        </p>
        <hr class="w-48 h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
      </header>
      <p class="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left max-h-screen overflow-auto">
        {location.state.description}
      </p> 
      <hr class="w-48 h-1 mx-auto my-4 bg-gray-300 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
      <button
        onClick={() => {
            handleLike(() => setLiked(true));
        }}      
        disabled={liked()}
        className={`px-4 py-2 rounded text-white "bg-blue-500" : "bg-gray-500"}`}type="button" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg> 
        <span class="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
        {liked() ? 'Liked' : 'Like'}
        </span>
      </button> 
      <p class="mb-3 text-xl font-semibold text-blue-600/100 dark:text-blue-500/100 max-h-screen overflow-auto">
          Páginas: {location.state.pages} <br />
          Generos: {location.state.categories}
        </p>
    </article>
    </div>
    </main>

    <CommentList />
    <CommentForm />   
</>
  )
}export default BookInfo
