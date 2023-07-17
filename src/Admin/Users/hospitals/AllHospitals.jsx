import React from 'react';
import d from '../Users.module.css'
import HospUser from '../hospitals/HospUser';
import Hospsuspended from '../hospitals/suspendedHospitals';
const AllHospitals = () => {
    return (
      <div className='justify-content-center' id={d.contain} >
     <HospUser/>
     <Hospsuspended/>
    </div>
    );
}

export default AllHospitals;
