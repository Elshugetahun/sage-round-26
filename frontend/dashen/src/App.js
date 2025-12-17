import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from "./pages/Home";
import About from './pages/About';
import NotFound from './pages/NotFound';
import Layout from './pages/Layout';
import Contact from './pages/Contact';
import Products from './pages/Products';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='products' element={<Products />} />
            <Route path='products' element={<Products />} />
          </Route>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
