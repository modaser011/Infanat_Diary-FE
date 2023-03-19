import React from 'react';
import d from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className="bd-foote page-footer sticky-buttom font-small black pt-4 mt-5 sticky-bottum" style={{backgroundColor:"GrayText"}} id={d.cont}>
    <div className="footer-copyright text-center py-3 ">© 2022 Copyright: Modaser Abdo</div>
</footer>
  );
}