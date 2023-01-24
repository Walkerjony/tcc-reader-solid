import SearchBooks from "./SearchBooks";

function Book() {
    return (
      <div>
        <h1>{book.volumeInfo.title}</h1>
        <p>{book.volumeInfo.authors.join(', ')}</p>
        <p>{book.volumeInfo.description}</p>
      </div>
    );
  }