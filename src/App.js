import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import MenuBar from './components/MenuBar';
import Footer from './components/Footer';
import Content from './pages/Content';
import Paitings from './pages/Paintings';
import ScrollToTop from './services/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <MenuBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='content/:id' element={<Content />} />
        <Route path='paintings' element={<Paitings />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
