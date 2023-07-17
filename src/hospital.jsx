import React from 'react';
import Slider from './Slider';
import d from './info.module.css'
import Faq from './parent/Action/FAQ/Faq';
import ServiceSlider from './Hospital/Services/servicesSlider';
const Hospiatal = () => {
    return (
        <div className='justify-content-center ' id={d.cont}>
            <Slider className='mb-2'/>
            <ServiceSlider/>
            <Faq/>
        </div>
    );
}

export default Hospiatal;
