import axios from "axios";
import { useLocation } from "@solidjs/router";
import { createSignal } from "solid-js";
import Header from "../home/Header";

function BookInfo(props) {  

  
    const location = useLocation();
    const bookId = location.state.id
    const user = localStorage.getItem("username")
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
    <Header/>
    <section class="bg-white dark:bg-gray-900">
    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div class=" font-light p-10 border-solid rounded-md border-b-8 border-sky-500 text-gray-500  ml-40 sm:text-lg dark:text-gray-400">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold font-montserrat  text-gray-900 dark:text-white">{location.state.title}</h2>
            <p class="mb-4  tracking-tight  font-bold text-gray-900 dark:text-white">Por: {location.state.authors} </p>
            <p class="mb-4  tracking-tight  font-bold text-gray-900 dark:text-white">Publicado em: {location.state.data} </p>
            <p class="mb-4  tracking-tight  font-bold text-gray-900 dark:text-white">Editora: {location.state.editora} </p>
            <p class="mb-4 tracking-tight  font-bold text-gray-900 dark:text-white">Avaliação: {location.state.rating} / 5 </p>
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
</div>              </div>
          </figcaption>
      </figure>
  </div>
</section>


     </>

  )
}export default BookInfo
