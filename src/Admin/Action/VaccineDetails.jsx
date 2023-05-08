import React from "react";
import "./vaccineDetails.css";
import vaccine from "../../assets/shutterstock_1866306277.jpg";

const VaccineDetails = () => {
  return (
    <div className="vaccinedetails__container container justify-content-center mx-auto 100-vh 100-vw">
      <div className="vaccinedetails">
        {/* Left */}
        <div className="vaccinedetails__left">
          <img className="vaccinedetails__image" src={vaccine} alt="" />
        </div>
        {/* Right */}
        <div className="vaccinedetails__right">
          <h1 className="vaccinedetails__header">Vaccine Name</h1>
          <div>
            <div className="vaccinedetails__ageDoseComp">
              <p className="vaccinedetails__infoInside">
                <span>Age:</span> 3 months
              </p>
              <p className="vaccinedetails__infoInside">
                <span>Dose:</span> 1mg
              </p>
              <p className="vaccinedetails__infoInside">
                <span>Compalsory:</span> True
              </p>
            </div>
            <p className="vaccinedetails__info">
              <span>Reasons:</span> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Voluptatum architecto dolorem sint nemo eligendi
              deleniti magni unde non expedita. Ex repellat fugit maxime
            </p>
            <p className="vaccinedetails__info">
              <span>Side effects:</span> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Iusto perspiciatis numquam molestias asperiores
              qui suscipit?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaccineDetails;
