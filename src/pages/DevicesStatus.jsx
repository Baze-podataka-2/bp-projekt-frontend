import React from 'react';
import { Container } from 'react-bootstrap';
import CreateStatus from '../components/addDeviceStatus';
import ShowStatuses from '../components/showDeviceStatuses';
import GetChanges from '../components/getNumberOfChangesOnDevice';
const TrackDevicesStatus = () => {


  return(
    <>
    <h1 className='mt-3'>Praćenje statusa uređaja</h1>
    <Container className=''>
      <CreateStatus/>
      <GetChanges/>
      <ShowStatuses/>
    </Container>
    </>
)
}


export default TrackDevicesStatus;
