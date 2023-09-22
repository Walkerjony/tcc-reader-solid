
import Home from '/pages/Home';
import ShowBooks from '/pages/ShowBooks';
import Login from  '/pages/Login';
<<<<<<< HEAD
import Edit from '/pages/Edit';
=======
>>>>>>> master
import Register from '/pages/Register'
import {Route, Routes} from '@solidjs/router';


function App() {
  return (
    <Routes>
     <Route path={"/"} component={Home}></Route>
     <Route path={"/login"} component={Login}></Route>
<<<<<<< HEAD
     <Route path={"/edit"} component={Edit}></Route>
     <Route path={"/register"} component={Register}></Route>
     <Route path={"/edit/:id"} component={Edit}></Route>
=======
     <Route path={"/register"} component={Register}></Route>
>>>>>>> master
     <Route path={"/books/:id"} component={ShowBooks}></Route>
    </Routes>
  );
}
export default App;
