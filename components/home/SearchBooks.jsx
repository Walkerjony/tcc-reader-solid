import axios from "axios";
import { createSignal } from "solid-js";
import { useNavigate, A } from "@solidjs/router";
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
  return (
      <div className="w-full mt-10 bg-gray-100 flex flex-col items-center">
        <div className="container mx-auto dark:bg-gray-900 rounded-lg p-14">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center font-bold text-white text-4xl">
            Find your perfect books{" "}
          </h1>{" "}
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
                Search
              </button>
            </div>
          </div>
        </form>
        </div>
        <div className="flex flex-wrap justify-center gap-4 p-4">
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
    </div>
    );
}




function Book({book, ...props}) {
  const navigate = useNavigate();
  const { id } = book;
  const { title } = book.volumeInfo;
  const  description  = book.volumeInfo.description;
  const publishedDate = book.volumeInfo.publishedDate;
  const image = book.volumeInfo.imageLinks?.thumbnail || 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fe1.pxfuel.com%2Fdesktop-wallpaper%2F42%2F788%2Fdesktop-wallpaper-error-black-404-page-not-found-thumbnail.jpg&tbnid=Zoww5uo89UlIHM&vet=12ahUKEwjSj__nqfP-AhW9pZUCHTTKAAIQMygCegQIARBE..i&imgrefurl=https%3A%2F%2Fwww.pxfuel.com%2Fen%2Fquery%3Fq%3D404%2Berror&docid=FyYiceUtDADdeM&w=350&h=757&q=not%20found%20dark%20vertical%20image&client=opera-gx&ved=2ahUKEwjSj__nqfP-AhW9pZUCHTTKAAIQMygCegQIARBE';
  const pages = book.volumeInfo.pageCount
  const authors  = [book.volumeInfo.authors];
  const epub = book.saleInfo.isEbook



  const showInfo = (props) => {
    navigate(`/books/${id}`, {state: { title, authors, description, publishedDate, image, pages, epub  } })
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
        <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0">
            <a href="#">
              <img class="h-96 w-50 rounded-lg" src = {image}  alt="image description"> </img>
            </a>
            <figcaption class="absolute px-4 text-lg text-white bottom-6">
                <p class="mb-3 text-xl font-semibold text-white-600/100 dark:text-white-500/100 max-h-screen overflow-auto">{title}</p>
                <A href = {linkTo.pathname} onclick={showInfo} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Read more
           </A>
            </figcaption>
          </figure>  
    </div>
</div>

  );
}
export default SearchBooks;

