import axios from "axios";
import React from "react";
import { useState } from "react";
import { createContext } from "react";
const vacBabyContext = createContext();
const VacBabydata = ({ children }) => {
  const [user , setUser] = useState(null)
  const [token , setToken] = useState(null)

  const login = (user)=>{
      setUser(user)
  }
  const logout = ()=>{
      setUser(null)
  }
  const [babies,setBabies] = useState([]);
  const[mad,setMad]=useState(null)
  const [vacc, setVacc] = useState([]);
  const [loud, setLoud] = useState(false);
  const [loud2, setLoud2] = useState(false);

  const [x, setX] = useState(false);
const [change,setChange]=useState(true)
  const Detailschild = async () => {
    setLoud2(true);
    await axios
      .get("https://infant-diary-backend.onrender.com/api/v1/parent",{headers:{"Access-Control-Allow-Origin":"*","Content-Type": "application/json",'token':`${token}`}})
      .then((res) => {
        if (res.status === 200) {
          setLoud2(false);
          setBabies(res.data.childerns);
        } else {
          alert(res.data.Error);
        }
      });
  };
console.log('token is = '+token)
  const DetailsVac = async () => {
    setLoud(true);
    await axios
      .get("https://infant-diary-backend.onrender.com/api/v1/vaccine")
      .then((res) => {
        if (res.status === 200) {
          setLoud(false);
          setVacc(res.data.vaccines);
        } else {
          alert(res.data.Error);
        }
      });
  };

  const [succ, setSucc] = useState(false);
  console.log(succ);

  const addvac = (rr) => {
    setSucc(!rr);
  };
  const [y, setY] = useState(true);
  return (
    <vacBabyContext.Provider
      value={{
        babies,
        vacc,
        loud,
        DetailsVac,
        x,
        setSucc,
        succ,
        setVacc,
        setX,
        addvac,
        Detailschild,
        loud2,
        token,
        setToken,mad,setMad,change,setChange
      }}
    >
      {children}
    </vacBabyContext.Provider>
  );
};

export { VacBabydata, vacBabyContext };
