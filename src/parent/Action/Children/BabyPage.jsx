import React from 'react';
import BabyData from './BabyData';
import Cart from './Cart';
import d from '../../../info.module.css'
import Charts from './charts';
const BabyPage = () => {
    return (
        <div className='justify-content-center' id={d.cont}>
           <BabyData/> 
           <Cart/>
           <Charts/>
        </div>
    );
}

export default BabyPage;
