import {BrowserRouter, Routes, Route} from "react-router-dom";
import AboutUs from './components/about/AboutUs';
import Services from './components/services/Services';

function App(){
  return( 
    <BrowserRouter>
      <Routes> 
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/services" element={<Services/>} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;


