import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import NotFound from "./pages/NotFound";


const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}
export default App