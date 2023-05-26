import React from 'react';
import BabyData from './Action/BabyData';
import { Container } from 'react-bootstrap';
import Cart from './Action/Cart';
import d from '../info.module.css'    
const BabyPage = () => {
    return (
        <div className='justify-content-center ' id={d.cont}>
           <BabyData/> 
           <Cart/>
        </div>
    );
}

export default BabyPage;
