import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Middle from './Components/Middle/Middle'
import Card from './Components/Card/Card'
import Tour from './Components/Tour/Tour'
import Winter from './Components/Winter/Winter'
import Categories from './Components/Categories/Categories'
import Whyus from './Components/Whyus/Whyus'
import Gallery from './Components/Gallery/Gallery'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'

function App() { 
  return (
   <div>
    <Navbar/>
    <Home/>
    <Middle/>
    <Card/>
    <Categories/>
    <About/>
    <Winter/>
    <Tour/>
    <Gallery/>
    <Whyus/>
    <Footer/>
   </div>
  )
}

export default App
