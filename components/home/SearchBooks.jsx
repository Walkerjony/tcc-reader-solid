import axios from "axios";
import { createSignal, onMount } from "solid-js";
import { useNavigate, A } from "@solidjs/router";
import Header from "/components/home/Header";
import BookInfo from "/components/ShowBook/BookInfo";

function SearchBooks() {
  const [searchText, setSearchText] = createSignal("");
  const [books, setBook] = createSignal([]);
  console.log(books)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchText()}`
      );
      if (response) {
        const books = response.data.items;
        console.log(books);
        setBook(books);
      }
    } catch (error) {
      console.error('Error occurred:', error.message || error);
    }    
  };

  const [isLoggedIn, setIsLoggedIn] = createSignal(false);
  const [userId, setUserId] = createSignal('');

  onMount(async () => {
    try {
      //const response = await axios.get('http://localhost:8001/user');
      //const dataSession = response.data.ses;
      //console.log(dataSession.user);
      const user = localStorage.getItem("user")
      if(user){
      setUserId(localStorage.getItem("user"))
      setIsLoggedIn(true);    
    }
      else{
        setUserId(localStorage.getItem("user"))
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.log(error);
    }
    
  })
  return (
    <>
    <Header/>

    <section class="bg-no-repeat bg-cover bg-[url('https://media.thegospelcoalition.org/wp-content/uploads/2023/04/04185025/build-theological-library-1920x1080.jpg')] bg-gray-700 bg-blend-multiply">
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">

        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Procure seus Livros</h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Milhares de livros e gêneros a sua disposição</p>
        <form onSubmit={handleSubmit}>
          <br />
          <div className="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1 justify-between">
            <input
              className="text-base text-gray-400 flex-grow outline-none px-2"
              type="text"
              placeholder="Search for books"
              value={searchText()}
              onInput={(e) => setSearchText(e.target.value)}
            />
            <div className="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
              <button className="dark:bg-gray-900 text-white text-base rounded-lg px-4 py-2 font-thin">
                Procurar
              </button>
            </div>
          </div>
        </form>
      </div>
            <div className="flex flex-wrap justify-center gap-4 p-2">
          {books().map((book) => (
            <>
            <Book book={book}/>
            </>
          ))}
        </div>
        <style>
        {`
          .flex {
            display: flex;
          }

          .flex-wrap {
            flex-wrap: wrap;
          }

          .justify-center {
            justify-content: center;
          }

          .gap-4 > * + * {
            margin-left: 1rem;
          }

          .p-4 {
            padding: 1rem;
          }
        `}
      </style>            
</section>
    </>
    );
}




function Book({book, ...props}) {
  const navigate = useNavigate();
  const { id } = book;
  const { title } = book.volumeInfo;
  const idioma = book.volumeInfo.language	
  const rating = book.volumeInfo.averageRating;
  const  description  = book.volumeInfo.description;
  const data = book.volumeInfo.publishedDate
  const sales = book.saleInfo.buyLink
  const editora = book.volumeInfo.publisher
  const publishedDate = book.volumeInfo.publishedDate;
  const image = book.volumeInfo.imageLinks?.thumbnail || 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fe1.pxfuel.com%2Fdesktop-wallpaper%2F42%2F788%2Fdesktop-wallpaper-error-black-404-page-not-found-thumbnail.jpg&tbnid=Zoww5uo89UlIHM&vet=12ahUKEwjSj__nqfP-AhW9pZUCHTTKAAIQMygCegQIARBE..i&imgrefurl=https%3A%2F%2Fwww.pxfuel.com%2Fen%2Fquery%3Fq%3D404%2Berror&docid=FyYiceUtDADdeM&w=350&h=757&q=not%20found%20dark%20vertical%20image&client=opera-gx&ved=2ahUKEwjSj__nqfP-AhW9pZUCHTTKAAIQMygCegQIARBE';
  const pages = book.volumeInfo.pageCount
  const authors  = [book.volumeInfo.authors];
  const preview = book.volumeInfo.previewLink
  const categories = [book.volumeInfo.categories] || 'Nao encontrado';

  const showInfo = (props) => {
    navigate(`/books/${id}`, {state: {id, title, data, editora, sales, authors, rating, idioma, description, publishedDate, image, pages, preview, categories  } })
    console.log(book)
    console.log(title)
  }

  const linkTo = {
    pathname: `/books/${id}`,
  };

  
  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg">
    <div class="p-5">
        <a href="#">
        </a>
        <figure class="relative max-w-sm">
            <a href="#">
              <img class="h-96 w-50 rounded-lg" src = {image}  alt="image description"> </img>
            </a>
            <figcaption class="absolute px-4 text-lg text-white bottom-6">
                <p class="mb-3 text-xl font-semibold text-white-600/100 dark:text-white-500/100 max-h-screen overflow-auto">{title}</p>
                <A href = {linkTo.pathname} onclick={showInfo} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Ver Mais
               </A>
            </figcaption>
          </figure>  
    </div>
</div>

  );
}
export default SearchBooks;

