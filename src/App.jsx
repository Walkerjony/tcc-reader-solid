
import Home from '/pages/Home';
import ShowBooks from '/pages/ShowBooks'
import {Route, Routes} from '@solidjs/router';
import BookInfo from '../components/ShowBook/BookInfo';


function App() {
  return (
    <Routes>
     <Route path={"/"} component={Home}></Route>
     <Route path={"/books/:id"} component={ShowBooks}></Route>
    </Routes>
  );
}
export default App;
