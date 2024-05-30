import './App.css';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import FAQ from './Pages/FAQ';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Calculator from './Pages/Calculator';
import GPA_scale from './Pages/GPA_scale';
import How_to_calculate_gpa from './Pages/How_to_calculate_gpa';
import DesktopNavBar from './Components/DesktopNavBar';
import { useState } from 'react';
import { useEffect } from 'react';
import DesktopFooter from './Components/DesktopFooter';

function App() {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
    useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    }, []);
  return (
    <div className="App">
      {isSmallScreen ? <NavBar /> : <DesktopNavBar />}
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home/>}></Route>
          <Route path='/FAQ' element={<FAQ/>}></Route>
          <Route path='/Calculator' element={<Calculator/>}></Route>
          <Route path='/GPA_scale' element={<GPA_scale/>}></Route>
          <Route path='/How_to_calculate_gpa' element={<How_to_calculate_gpa/>}></Route>
        </Routes>
      </BrowserRouter>
      {isSmallScreen ? <Footer/> : <DesktopFooter/>}   
    </div>
  );
}

export default App;
