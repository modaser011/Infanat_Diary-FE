import React from 'react';
import d from './info.module.css'
import Slider from './Slider';
import Mybabies from './parent/Action/Mybabies';
import {vacBabyContext } from "./data/vacBabydata";
import SliderDoctor from './parent/Action/SliderDoctor';
import { useContext } from 'react';
const Parent = () => {
    const userauth=useContext(vacBabyContext)
console.log("token =  "+ userauth.token)
console.log(userauth.mad)

    return (
        <div className='justify-content-center ' id={d.cont}>
          <Slider className='mb-2'/>
          <Mybabies/>
          <SliderDoctor/>
        </div>
    );
}

export default Parent;
