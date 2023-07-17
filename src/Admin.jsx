import React from 'react';
import Charts from './Admin/Users/chartsAdm';
import d from './info.module.css'
import Pending from './Admin/Users/pending';
const Admin = () => {
    return (
        <div id={d.cont}>
            <Charts/>
            <Pending/>
        </div>
    );
}

export default Admin;
