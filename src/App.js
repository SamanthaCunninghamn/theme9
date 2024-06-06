import React from'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
//pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
//componentes
import Center from './pages/Center';
import WarringPage from './pages/WarringPage';
import FormPage from './pages/FormPage';
import ConfirmPage from './pages/ConfirmPage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<Center />} />
          <Route path='/manager-account' element={<WarringPage />} />
          <Route path='/manager-account/buiness' element={<FormPage />} />
          <Route path='/manager-account/confirm' element={<ConfirmPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;