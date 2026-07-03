import {BrowserRouter, Routes, Route} from "react-router-dom";
import AboutUs from './components/about/AboutUs';
import Services from './components/services/Services';
import BlogList from './components/blog/BlogList';
import BlogDetailPage from'./pages/BlogDetailPage';
function App(){
  return( 
    <BrowserRouter>
      <Routes> 
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/blog" element={<BlogList/>}/>
        <Route path="/blog/:id" element={<BlogDetailPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;


