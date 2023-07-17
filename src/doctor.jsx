import React from 'react';
import Slider from './Slider';
import Clinic from './Doctor/clinic/clinic';
import d from './info.module.css'
import Faq from './parent/Action/FAQ/Faq';
const Doctor = () => {
    return (
        <div className='justify-content-center ' id={d.cont}>
            <Slider className='mb-2'/>
            <Clinic/>
            <Faq/>
        </div>
    );
}

export default Doctor;
