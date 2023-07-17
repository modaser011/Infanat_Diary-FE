import React from 'react';
import d from '../Users.module.css'
import ParentUser from '../Parents/ParentUser';
import ParentSuspend from '../Parents/suspendedParents';
const AllParent = () => {
    return (
      <div className='justify-content-center' id={d.contain} >
     <ParentUser/>
     <ParentSuspend/>
    </div>
    );
}

export default AllParent;
