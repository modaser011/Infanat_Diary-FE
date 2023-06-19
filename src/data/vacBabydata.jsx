import axios from "axios";
import React from "react";
import { useState } from "react";
import { createContext } from "react";
const vacBabyContext = createContext();
const adminContext = createContext();
const VacBabydata = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [select, setSelect] = useState("");

  const login = (user) => {
    setUser(user);
  };
  const logout = () => {
    setToken(null);
  };
  const [babies, setBabies] = useState([]);
  const [mad, setMad] = useState(null);
  const [vacc, setVacc] = useState([]);
  const [vaccLoud, setVaccLoud] = useState(false);
  const [changeVacc, setChangeVacc] = useState([]);

  const [loud2, setLoud2] = useState(false);
  const [loudDoc, setLoudDoc] = useState(false);
  const [docDetail, setDocDetail] = useState([]);
  const [loud3, setLoud3] = useState(false);
  const [posts, setPosts] = useState([]);
  const [x, setX] = useState(false);
  const [x1, setX1] = useState(false);
  const [change, setChange] = useState(true);
  const [changePost, setChangePost] = useState(true);
  const [qius, setَQius] = useState([]);
  const [qiusloud, setَQiusLous] = useState(false);
  const [changeQuis, setChangeQuis] = useState(true);
  const [annonce,setAnnonce]=useState([])
  const [annonceloud, setAnnonceloud] = useState(false);
  const [changeannonce, setChangeAnnonce] = useState(true);

  const announcements = async () => {
    setAnnonceloud(true);
    await axios
      .get("https://infant-diary-backend.onrender.com/api/v1/announcement", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: `${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setAnnonceloud(false);
          setAnnonce(res.data.announcement);
        } else {
          alert(res.data.Error);
        }
      });
  };

  const quisdetails = async () => {
    setَQiusLous(true);
    await axios
      .get("https://infant-diary-backend.onrender.com/api/v1/question", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: `${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setَQiusLous(false);
          setَQius(res.data.questions);
        } else {
          alert(res.data.Error);
        }
      });
  };

  const Detailschild = async () => {
    setLoud2(true);
    await axios
      .get("https://infant-diary-backend.onrender.com/api/v1/parent", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: `${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setLoud2(false);
          setBabies(res.data.childerns);
        } else {
          alert(res.data.Error);
        }
      });
  };

  const postsDetails = async () => {
    setLoud3(true);
    await axios
      .get("https://infant-diary-backend.onrender.com/api/v1/post", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: `${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setLoud3(false);
          setPosts(res.data.posts);
        } else {
          alert(res.data.Error);
        }
      });
  };

  const searchPost = async (e, word) => {
    e.preventDefault();
    if (word === "") postsDetails();
    else {
      setLoud3(true);
      await axios
        .get(
          `https://infant-diary-backend.onrender.com/api/v1/post?keyword=${word}`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
              token: `${token}`,
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            setLoud3(false);
            setPosts(res.data.posts);
          } else {
            alert(res.data.Error);
          }
        });
    }
  };

  const DetailsVac = async () => {
    setVaccLoud(true);
    await axios
      .get("https://infant-diary-backend.onrender.com/api/v1/vaccine",
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: `${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setVaccLoud(false);
          setVacc(res.data.vaccines);
        } else {
          alert(res.data.Error);
        }
      });
  };
  const [babyId, setBabyId] = useState("");
  const [succ, setSucc] = useState(false);

  const addvac = (rr) => {
    setSucc(!rr);
  };

  const doctorDetails = async () => {
    setLoudDoc(true);
    await axios
      .get("https://infant-diary-backend.onrender.com/api/v1/doctor", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: `${token}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setLoudDoc(false);
          setDocDetail(res.data.doctors);
        } else {
          alert(res.data.Error);
        }
      });
  };

  const searchDoc = async (e, word) => {
    e.preventDefault();
    setLoudDoc(true);
    await axios
      .get(
        `https://infant-diary-backend.onrender.com/api/v1/doctor?keyword=${word}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            token: `${token}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setLoudDoc(false);
          setDocDetail(res.data.doctors);
        } else {
          alert(res.data.Error);
        }
      });
  };

  return (
    
      <vacBabyContext.Provider
        value={{
          babies,
          vacc,
          vaccLoud,
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
          setToken,
          mad,
          setMad,
          change,
          setChange,
          babyId,
          setBabyId,
          postsDetails,
          posts,
          loud3,
          changePost,
          setChangePost,
          x1,
          setX1,
          doctorDetails,
          docDetail,
          searchDoc,
          loudDoc,
          quisdetails,
          qiusloud,
          qius,
          searchPost,
          logout,
          select,
          setSelect,changeQuis,setChangeQuis,changeVacc,setChangeVacc
        }}
      >
        {children}
      </vacBabyContext.Provider>
  );
};

export { VacBabydata, vacBabyContext };
