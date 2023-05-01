
import Header from '/components/Header'
import SearchBooks from '/components/SearchBooks'
import BookInfo from '/components/BookInfo'
import AboutInfo from '/components/AboutInfo'
import Tips from '/components/Tips'
import Cards from '/components/Cards'
import {Route, Router} from '@solidjs/router';

function App() {
  return (
    <>
    <Header />
    <SearchBooks />
    <AboutInfo />
    <Tips />
    <Cards />
    <Router>
      <Route exact path="/" component={SearchBooks} />
      <Route path="/searched-books/:id" component={BookInfo} />
    </Router>
    </>
  );
}

export default App;
