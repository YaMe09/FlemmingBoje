import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header';
import Forside from './components/Forside';
import Footer from './components/Footer';
import Tilbyder from './components/Tilbyder';
import Foredragsholder from './components/Foredragsholder';
import Blog from './components/Blog';
import Citater from './components/Citater';
import Omflemming from './components/Omflemming';
import Kontakt from './components/Kontakt';
import Logind from './components/Logind';

function App() {
 

  return (
    <>
     <BrowserRouter>
       <Routes>
       <Route path='/' element={<Forside />} />
       <Route path='/tilbyder' element={<Tilbyder />} />
       <Route path='/foredragsholder' element={<Foredragsholder />} />
       <Route path='/blog' element={<Blog/>} />
       <Route path='/citater' element={<Citater/>} />
       <Route path='/omflemming' element={<Omflemming/>} />
       <Route path='/kontak' element={<Kontakt/>} />
       <Route path='/logind' element={<Logind/>} />
       </Routes>
     </BrowserRouter>

    </>
  )
}

export default App
