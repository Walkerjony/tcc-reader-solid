import axios from "axios";
import { useLocation } from "@solidjs/router";
import { createSignal } from "solid-js";
import Header from "../home/Header";
import toast, { Toaster } from 'solid-toast';

function BookInfo(props) {  

    const location = useLocation();
    const bookId = location.state.id
    const [liked, setLiked] = createSignal(false);
    const [disliked, setdisLiked] = createSignal(false);

    const notify = () => toast.success('Curtido');
    const notifyDislike = () => toast.success('Descurtido');
    const user = localStorage.getItem("name")

    const handleLike = async () => {
            await axios
            .post("http://localhost:8001/like-book", {
                bookId,
                user
             })
            .then((res) => {
            notify()
            console.log('Liked', res)
        })
            .catch((error) => {
            console.log(error);
        });
    }
    
    const handledisLike = async () => {
        await axios
        .post("http://localhost:8001/dislike-book", {
            bookId,
            user
         })
        .then((res) => {
        notifyDislike()
        console.log('Disliked', res)
    })
        .catch((error) => {
        console.log(error);
    });
}

  return(
    <>
    <Header/>
    <section class="bg-white dark:bg-gray-900">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class=" font-light p-10 border-solid rounded-md border-b-8 border-sky-500 text-gray-500  ml-40 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold font-montserrat  text-gray-900 dark:text-white">{location.state.title}</h2>
            <p class="mb-4  tracking-tight  font-bold text-gray-900 dark:text-white">Por: {location.state.authors} </p>
            <p class="mb-4  tracking-tight  font-bold text-gray-900 dark:text-white">Publicado em: {location.state.data} </p>
            <p class="mb-4  tracking-tight  font-bold text-gray-900 dark:text-white">Editora: {location.state.editora} </p>
            <p class="mb-4 tracking-tight  font-bold text-gray-900 dark:text-white">Avaliação: {location.state.rating} / 5 </p>
            
            <div class="flex items-center lg:order-2">
                <div class="flex gap-4  items-center">

                <button type="submit" onClick={() => handleLike(() => setLiked(true))} class="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                </svg>

                </button>
                <Toaster 
                 position="top-center"
                />

                <button type="submit" onClick={() => handledisLike(() => setdisLiked(true))} class="text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800 dark:hover:bg-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384" />
                </svg>

                </button> 

                </div>
            </div>
            
          
              
            </div>
        <div class="grid grid-cols-2 gap-4 mt-8">
            <img class="mt-4 w-full ml-40 lg:mt-10 rounded-lg" src= {location.state.image} alt="office content 2"/>
        </div>
    </div>
</section>

<section class="bg-white dark:bg-white-900">
  <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
      <figure class="max-w-screen-md mx-auto">
          <svg class="h-12 animate-pulse mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
          </svg> 
          <blockquote>
              <p class="first-line:uppercase first-line:tracking-widest
  first-letter:text-4xl first-letter:font-boldtext-2xl font-montserrat text-gray-900 dark:text-dark ">{location.state.description}</p>
          </blockquote>
          <hr class="w-48 animate-pulse h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
          <figcaption class="flex items-center justify-center mt-6 space-x-3">
              <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                
              <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
    <div class="mb-4 pr-3 tracking-tight font-extrabold text-gray-900 dark:text-dark">
        <a href={location.state.sales} style="display: flex; align-items: center; text-decoration: none;">
            <span>Adquirir Livro</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
        </a>
    </div>
</div>                  

<div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
    <div class="mb-4 pl-3 tracking-tight font-extrabold text-gray-900 dark:text-dark">
        <a href={location.state.preview} style="display: flex; align-items: center; text-decoration: none;">
            <span>Visualizar Livro</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-2 ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        </a>
        </div>
    </div>              
</div>
          </figcaption>
      </figure>
  </div>
</section>


     </>
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
      <p class="mb-3 text-xl font-semibold text-blue-600/100 dark:text-blue-500/100 max-h-screen overflow-auto">
          Páginas: {location.state.pages}
        </p>
        <p class="mb-3 text-xl font-semibold text-blue-600/100 dark:text-blue-500/100 max-h-screen overflow-auto">
          Disponivel Online: {location.state.epub}
        </p>
    </article>
    
  </div>
</main>

  )
}export default BookInfo
