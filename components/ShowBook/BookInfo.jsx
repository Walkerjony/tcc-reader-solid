import { useLocation } from "@solidjs/router";


function BookInfo(props) {  
  const location = useLocation();
  // const book = JSON.parse(location.state.book)
  console.log(location)
  return <h2> { location.state.authors } { location.state.title } </h2>;
}export default BookInfo