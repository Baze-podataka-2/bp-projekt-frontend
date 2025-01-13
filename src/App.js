import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Servers from './pages/Servers';
import Services from './pages/Services';
import SingleService from './pages/SingleService';
import Equipments from './pages/Equipment';
import Incidents from './pages/Incidents';
import NotFound from "./pages/NotFound";


const App = () => {
  return (
    <BrowserRouter>
      <Container>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/serveri' element={<Servers/>} />
          <Route path='/usluge' element={<Services/>} />
          <Route path='/usluge/:id' element={<SingleService/>}/>
          <Route path='/oprema' element={<Equipments/>} />
          <Route path='/incidenti' element={<Incidents/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </Container>
    </BrowserRouter>
  )
}
export default App