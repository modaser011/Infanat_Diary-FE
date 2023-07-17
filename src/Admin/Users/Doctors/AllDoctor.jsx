import React from "react";
import { Container } from "react-bootstrap";
import DocUser from "../Doctors/DocUser";
import d from "../Users.module.css";
import DocSuspend from "../Doctors/suspendedDoctors";
const AllDoctor = () => {
  return (
    <div className='justify-content-center' id={d.contain} >
    <DocUser />
      <DocSuspend />
    </div>
  );
};

export default AllDoctor;
