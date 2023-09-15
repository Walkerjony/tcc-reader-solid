import Header from '../components/home/Header'
import SearchBooks from '../components/home/SearchBooks'
import AboutInfo from '../components/home/AboutInfo'
import Tips from '../components/home/Tips'
import Cards from '../components/home/Cards'
import Importance from '../components/home/Importance'
import ReaderSection from '../components/home/ReaderSection'
import Maps from '../components/home/Maps'
function Home() {
return(
    <>
      <SearchBooks />
      <AboutInfo />
      <Tips />
      <Cards />
      <Importance />
      <ReaderSection/>
      <Maps/>
    </>
)
}export default Home