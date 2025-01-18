import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';



import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Servers from './pages/Servers';
import CreateServer from './pages/CreateServer';
import SingleServer from "./pages/SingleServer"
import Services from './pages/Services';
import SingleService from './pages/SingleService';
import DeleteService from './pages/DeleteService';
import Equipments from './pages/Equipment';
import Configuration from './pages/DeviceConfiguration';
import Incidents from './pages/Incidents';
import NotFound from "./pages/NotFound";
import Logs from './pages/Logs';
import Snapshots from './pages/Snapshots';
import Employees from './pages/Employees';
import TrackDevicesStatus from './pages/DevicesStatus';
import DeviceGeneratedCosts from './pages/GeneratedCosts';

const App = () => {
  return (
    <BrowserRouter>
      <Container>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/serveri' element={<Servers/>} />
          <Route path='/serveri/kreiraj' element={<CreateServer/>}/>
          <Route path='/serveri/:id' element={<SingleServer/>} />
          <Route path='/usluge' element={<Services/>} />
          <Route path='/usluge/izbrisi/:id' element={<DeleteService/>}/>
          <Route path='/usluge/:id' element={<SingleService/>}/>
          <Route path='/oprema' element={<Equipments/>} />
          <Route path='/konfiguracija' element={<Configuration/>} />
          <Route path='/incidenti' element={<Incidents/>} />
          <Route path = '/logovi'  element={<Logs/>}/>
          <Route path = '/snapshots'  element={<Snapshots/>}/>
          <Route path = '/zaposlenici'  element={<Employees/>}/>
          <Route path = '/statusi'  element={<TrackDevicesStatus/>}/>
          <Route path = '/troskovi'  element={<DeviceGeneratedCosts/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </Container>
    </BrowserRouter>
  )
}
export default App