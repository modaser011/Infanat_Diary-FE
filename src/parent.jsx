import React from 'react';
import d from './info.module.css'
import Slider from './Slider';
import Mybabies from './parent/Action/Children/Mybabies';
import SliderDoctor from './parent/Action/Doctors/SliderDoctor';
import Faq from './parent/Action/FAQ/Faq';
import HospSlider from './parent/Action/Hospitalsdetails/HospSlide';
const Parent = () => {


    return (
        <div className='justify-content-center ' id={d.cont}>
          <Slider className='mb-2'/>
          <Mybabies/>
          <SliderDoctor/>
          <HospSlider/>
<Faq/>
        </div>
    );
}

export default Parent;
