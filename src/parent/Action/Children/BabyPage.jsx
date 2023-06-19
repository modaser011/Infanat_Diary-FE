import React from 'react';
import BabyData from './BabyData';
import Cart from './Cart';
import d from '../../../info.module.css'
const BabyPage = () => {
    return (
        <div className='justify-content-center ' id={d.cont}>
           <BabyData/> 
           <Cart/>
        </div>
    );
}

export default BabyPage;
