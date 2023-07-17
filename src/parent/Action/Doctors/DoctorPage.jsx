import React from 'react';
import DoctorData from './DoctorData';
import d from './allDoc.module.css'
import ClinicsOfDoctor from './ClinicsOfDoctor';
const DoctorPage = () => {
    return (
        <div className='justify-content-center' id={d.cont}>
           <DoctorData/> 
           <ClinicsOfDoctor/>
        </div>
    );
}

export default DoctorPage;
