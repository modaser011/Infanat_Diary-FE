import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const vacBabyContext = createContext();
const VacBabydata = ({ children }) => {
  const [babies] = useState([
    {
      name: "ahmed",
      birthData: "10/10/2020",
      gender: "male",
      weight: "750",
      headDiameter: "5",
      height: "40",
    },
    {
      name: "mena",
      birthData: "10/10/2020",
      gender: "female",
      weight: "750",
      headDiameter: "5",
      height: "40",
    },
  ]);
  const [search, setsearch] = useState("");
  const searcher = () => {
    return babies.filter((el, e) => el.name.includes(search));
  };
  const setsearcher = (e) => {
    setsearch(e.target.value);
  };
  const [vacc, setVacc] = useState([]);
  const [loud, setLoud] = useState(false);
  const [x, setX] = useState(false);
  const Details = async () => {
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
  const Details2 = async () => {
    setLoud(true);
    await axios
      .get("https://infant-diary-backend.onrender.com/api/v1/vaccine")
      .then((res) => {
        if (res.status === 200) {
          setLoud(false);
          setInterval(() => {
            setVacc(res.data.vaccines);
                      console.log("ali hatem de7ket")

        }, 2000)
        } else {
          alert(res.data.Error);
        }
      });
  };
  const [succ, setSucc] = useState(false);
  console.log(succ);

  useEffect(() => {
    Details();
    setInterval(() => {
      setX(true);
    }, 1000);
  }, [succ]);

  return (
    <vacBabyContext.Provider
      value={{
        babies,
        setsearcher,
        searcher,
        search,
        vacc,
        Details2,
        loud,
        x,
        setSucc,
        succ,
        setVacc
      }}
    >
      {children}
    </vacBabyContext.Provider>
  );
};

export { VacBabydata, vacBabyContext };
