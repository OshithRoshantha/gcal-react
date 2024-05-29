import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import FAQ from './Pages/FAQ';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Calculator from './Pages/Calculator';
import GPA_scale from './Pages/GPA_scale';
import How_to_calculate_gpa from './Pages/How_to_calculate_gpa';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home/>}></Route>
          <Route path='/FAQ' element={<FAQ/>}></Route>
          <Route path='/Calculator' element={<Calculator/>}></Route>
          <Route path='/GPA_scale' element={<GPA_scale/>}></Route>
          <Route path='/How_to_calculate_gpa' element={<How_to_calculate_gpa/>}></Route>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
