import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import FAQ from './Pages/FAQ';



function App() {
  return (
    <div className="App">
      <NavBar/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;
