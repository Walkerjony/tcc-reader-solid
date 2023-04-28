function BookInfo(props) {
    const bookData = props.location.state.bookData;
    const { title, authors, description } = bookData.volumeInfo;

    
    return (
      <div>
        <h1>{title}</h1>
        <p>Author: {authors.join(", ")}</p>
        <p>Description: {description}</p>
      </div>
    );
}export default BookInfo;