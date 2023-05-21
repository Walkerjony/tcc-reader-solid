
import Home from '/pages/Home';
import ShowBooks from '/pages/ShowBooks';
import Login from  '/pages/Login';
import Register from '/pages/Register'
import {Route, Routes} from '@solidjs/router';


function App() {
  return (
    <Routes>
     <Route path={"/"} component={Home}></Route>
     <Route path={"/login"} component={Login}></Route>
     <Route path={"/register"} component={Register}></Route>
     <Route path={"/books/:id"} component={ShowBooks}></Route>
    </Routes>
  );
}
export default App;
