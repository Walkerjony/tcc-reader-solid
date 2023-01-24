import axios from "axios";
import { createSignal } from "solid-js";

function SearchBooks() {
  const [searchText, setSearchText] = createSignal("");
  const [book, setBook] = createSignal(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchText()}`
      );
      const books = response.data.items;
      console.log(books);
      setBook(response.data);
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
    </div>
  );
}
export default SearchBooks;
