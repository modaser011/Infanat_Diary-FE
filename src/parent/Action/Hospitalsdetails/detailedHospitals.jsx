import React from 'react';
import d from '../../../info.module.css'
import HospValues from './hospValues';
import HospitalsServices from './HosServices';
import HospVaccines from './HospVaccines';
const BabyPage = () => {
    return (
        <div className='justify-content-center' id={d.cont}>
           <HospValues/> 
           <HospitalsServices/>
           <HospVaccines/>
        </div>
    );
}

export default BabyPage;
