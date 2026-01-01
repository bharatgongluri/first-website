import Navbar from './components/Navbar';
import"./App.Css"
import Hero from './components/Hero';
import Posts from './components/Posts'; 
import Works from './components/Works';


import Footer from './components/Footer';

const App = () => {
  return (
    <div> 
      <Navbar /> 
      <Hero />
      <Posts />
      <Works />
      <Footer />
    
     
    </div>
  )
}

export default App
