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
  const  authors  = [book.volumeInfo.authors];

  const showInfo = (props) => {
    navigate(`/books/${id}`, {state: { title, authors, description  } })
    console.log(book)
    console.log(title)
  }

  const linkTo = {
    pathname: `/books/${id}`,
  };



  return (
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{authors.join(", ")}</p>
        <A href = {linkTo.pathname} onclick={showInfo} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </A>
    </div>
</div>
  );
}
export default SearchBooks;

