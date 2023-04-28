import axios from "axios";
import { createSignal } from "solid-js";
import {Route, Router, A} from '@solidjs/router';

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
      console.log(error);
    }
  };

  return (
    <div className="w-full mt-10 bg-gray-100 flex justify-center items-center">
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
      {books().map((book) => (
        <Book book={book} />
      ))}
    </div>
  );
}


function Book(props) {
  const { id } = props.book;
  const { title } = props.book.volumeInfo;
  const  authors  = [props.book.volumeInfo.authors];
  const linkTo = {
    pathname: `/searched-books/${id}`,
    state: { bookData: props.book },
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>Author: {authors.join(", ")}</p>
      {/* <A to={linkTo}>View details </A> */}
    </div>
  );
}

export default SearchBooks;
