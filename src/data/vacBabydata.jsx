import axios from "axios";
import React from "react";
import { useState } from "react";
import { createContext, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { collection, getDocs, query, where } from "firebase/firestore";
import {db} from '../firebase/firestore'
const vacBabyContext = createContext();
const VacBabydata = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [select, setSelect] = useState("");
  const [idxDoc, setIdxDoc] = useState("");
  const logout = () => {
    setToken(null);
    setSelect("");
    localStorage.setItem("token", null);
    setUser("");
  };
  const [babies, setBabies] = useState([]);
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
  const [annonce, setAnnonce] = useState([]);
  const [annonceloud, setAnnonceloud] = useState(false);
  const [changeannonce, setChangeAnnonce] = useState(true);
  const [information1, setInformation] = useState([]);
  const [infoLoud, setInfoLoud] = useState(false);
  const [changeInfo, setChangeInfo] = useState(true);
  const [standards, setStandards] = useState([]);
  const [standardsLoud, setStandardsLoud] = useState(false);
  const [changeStandards, setChangeStandards] = useState(true);

  const [pendDoctor, setPendDoctor] = useState([]);
  const [pendDoctorLoud, setPendDoctorLoud] = useState(false);
  const [changePendDoctor, setchangePendDoctor] = useState(true);

  const [pendHospital, setPendHospital] = useState([]);
  const [pendHospitalLoud, setPendHospitalLoud] = useState(false);
  const [changePendHospital, setchangePendHospital] = useState(true);

  const [hospital, setHospital] = useState([]);
  const [loudHosp, setLoudHosp] = useState(false);
  const [HospitalChange, setHospitalChange] = useState(false);

  const [doctorChange, setDoctorChange] = useState(false);

  const [parent, setParent] = useState([]);
  const [loudParent, setLoudParent] = useState(false);
  const [parentChange, setParentChange] = useState(false);

  const [hospitalBlk, setHospitalBlk] = useState([]);
  const [loudHospBlk, setLoudHospBlk] = useState(false);
  const [HospitalChangeBlk, setHospitalChangeBlk] = useState(false);

  const [clinics, setClinics] = useState([]);
  const [clinicLoud, setClinicLoud] = useState(false);
  const [clinicChange, setClinicChange] = useState(false);
  const [docinfo, setDocInfo] = useState({});
  const [doctorInfoChange, setDoctorInfochange] = useState(false);
  const [doctorInfoLoud, setDoctorInfoLoud] = useState(false);
  const [clinicksDoctor, setClinicksDoctor] = useState([]);
  const [firebaseUser, setFirebaseUser] = useState(null);

  const doctorinfo = async () => {
    setDoctorInfoLoud(true);
    await axios
      .get(
        `https://infant-diary-backend.onrender.com/api/v1/doctor/DoctorInfo`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            token: `${localStorage.getItem("token")}`,
          },
        }
      )

      .then((res) => {
        if (res.status === 200) {
          setDoctorInfoLoud(false);
          setDocInfo(res.data);
          setClinicksDoctor(res.data.clinics);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const clinicDetails = async (word) => {
    setClinicLoud(true);
    await axios
      .get(
        `https://infant-diary-backend.onrender.com/api/v1/clinic?keyword=${word}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            token: `${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setClinicLoud(false);
          setClinics(res.data.clinics);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const hospitalBlk1 = async () => {
    setLoudHospBlk(true);
    await axios
      .get(
        "https://infant-diary-backend.onrender.com/api/v1/admin/BlockedHospitals",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            token: `${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setLoudHospBlk(false);
          setHospitalBlk(
            Array.isArray(res.data.BlockedHospitals)
              ? res.data.BlockedHospitals
              : []
          );
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [changeComment, setChangeComment] = useState(false);

  const [parentBlk, setParentBlk] = useState([]);
  const [loudParentBlk, setLoudParentBlk] = useState(false);
  const [parentChangeBlk, setParentChangeBlk] = useState(false);
  const [details, setDetails] = useState({});

  const parentBlk1 = async () => {
    setLoudParentBlk(true);
    await axios
      .get(
        "https://infant-diary-backend.onrender.com/api/v1/admin/BlockedParents",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            token: `${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setLoudParentBlk(false);
          setParentBlk(res.data.BlockedParents);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [doctorBlk, setDoctorBlk] = useState([]);
  const [loudDoctorBlk, setLoudDoctorBlk] = useState(false);
  const [DoctorChangeBlk, setDoctorChangeBlk] = useState(false);

  const doctorBlk1 = async () => {
    setLoudDoctorBlk(true);
    await axios
      .get(
        "https://infant-diary-backend.onrender.com/api/v1/admin/BlockedDoctors",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            token: `${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setLoudDoctorBlk(false);
          setDoctorBlk(
            Array.isArray(res.data.BlockedDoctors)
              ? res.data.BlockedDoctors
              : []
          );
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const parentDetails = async () => {
    setLoudParent(true);
    await axios
      .get("https://infant-diary-backend.onrender.com/api/v1/parent", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: `${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setLoudParent(false);
          setParent(res.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const hospitalDetails = async () => {
    setLoudHosp(true);
    await axios
      .get("https://infant-diary-backend.onrender.com/api/v1/hospital", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: `${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setLoudHosp(false);
          setHospital(res.data.hospitals);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const hospitalSearch = async (word) => {
    if (word === "") {
      hospitalDetails();
    } else {
      setLoudHosp(true);
      await axios
        .get(
          `https://infant-diary-backend.onrender.com/api/v1/hospital?keyword=${word}`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
              token: `${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            setLoudHosp(false);
            setHospital(res.data.hospitals);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const pendingHospitals = async () => {
    setPendHospitalLoud(true);
    await axios
      .get(
        "https://infant-diary-backend.onrender.com/api/v1/admin/PendingHospitals",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            token: `${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setPendHospitalLoud(false);
          setPendHospital(
            Array.isArray(res.data.pendingHospitals)
              ? res.data.pendingHospitals
              : []
          );
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const pendingDoctors = async () => {
    setPendDoctorLoud(true);
    await axios
      .get(
        "https://infant-diary-backend.onrender.com/api/v1/admin/PendingDoctors",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            token: `${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setPendDoctorLoud(false);
          setPendDoctor(
            Array.isArray(res.data.pendingDoctors)
              ? res.data.pendingDoctors
              : []
          );
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const standardDetails = async () => {
    setStandardsLoud(true);
    await axios
      .get("https://infant-diary-backend.onrender.com/api/v1/standard", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: `${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setStandardsLoud(false);
          setStandards(res.data.Products);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const standardSearch = async (word) => {
    setStandardsLoud(true);
    await axios
      .get(
        `https://infant-diary-backend.onrender.com/api/v1/standard?keyword=${word}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            token: `${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setStandardsLoud(false);
          setStandards(res.data.Products);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const informationDetails = async (word) => {
    setInfoLoud(true);
    await axios
      .get(
        `https://infant-diary-backend.onrender.com/api/v1/information?keyword=${word}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            token: `${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setInfoLoud(false);
          setInformation(res.data.inforamtion);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const announcements = async () => {
    setAnnonceloud(true);
    await axios
      .get("https://infant-diary-backend.onrender.com/api/v1/announcement", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: `${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setAnnonceloud(false);
          setAnnonce(res.data.announcements);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const quisdetails = async () => {
    setَQiusLous(true);
    await axios
      .get("https://infant-diary-backend.onrender.com/api/v1/question", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: `${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setَQiusLous(false);
          setَQius(res.data.questions);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const quisSearch = async (word) => {
    if (word === "") {
      quisdetails();
    } else {
      setَQiusLous(true);
      await axios
        .get(
          `https://infant-diary-backend.onrender.com/api/v1/question?keyword=${word}`,
          {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Content-Type": "application/json",
              token: `${localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          if (res.status === 200) {
            setَQiusLous(false);
            setَQius(res.data.questions);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  const [parentdata, setParentData] = useState({});
  const Detailschild = async () => {
    setLoud2(true);
    await axios
      .get(
        "https://infant-diary-backend.onrender.com/api/v1/parent/parentInfo",
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            token: `${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setLoud2(false);
          setBabies(res.data.childerns);
          setParentData(res.data);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const postsDetails = async (word) => {
    setLoud3(true);
    await axios
      .get(
        `https://infant-diary-backend.onrender.com/api/v1/post?keyword=${word}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            token: `${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setLoud3(false);
          setPosts(res.data.posts);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const searchPost = async (e, word) => {
    setLoud3(true);
    await axios
      .get(
        `https://infant-diary-backend.onrender.com/api/v1/post?keyword=${word}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            token: `${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setLoud3(false);
          setPosts(res.data.posts);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const DetailsVac = async () => {
    setVaccLoud(true);
    await axios
      .get("https://infant-diary-backend.onrender.com/api/v1/vaccine", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: `${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setVaccLoud(false);
          setVacc(res.data.vaccines);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const searchVac = async (word) => {
    setVaccLoud(true);
    await axios
      .get(
        `https://infant-diary-backend.onrender.com/api/v1/vaccine?keyword=${word}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            token: `${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setVaccLoud(false);
          setVacc(res.data.vaccines);
        }
      })
      .catch((error) => {
        console.error(error);
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
          token: `${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setLoudDoc(false);
          setDocDetail(res.data.doctors);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const searchDoc = async (word) => {
    setLoudDoc(true);
    await axios
      .get(
        `https://infant-diary-backend.onrender.com/api/v1/doctor?keyword=${word}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            token: `${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setLoudDoc(false);
          setDocDetail(res.data.doctors);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deletion = async (word, id1) => {
    await axios
      .delete(
        `https://infant-diary-backend.onrender.com/api/v1/${word}/${id1}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            token: `${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          if (word === "doctor") {
            setDoctorChangeBlk(!DoctorChangeBlk);
          } else if (word === "hospital") {
            setHospitalChangeBlk(!HospitalChangeBlk);
          } else if (word === "parent") {
            setParentChangeBlk(!parentChangeBlk);
          }
          alert(res.data.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const [idhos, setidHos] = useState("");
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    console.log(storedToken);
    if (
      storedToken &&
      storedToken !== undefined &&
      storedToken !== null &&
      storedToken !== "null"
    ) {
      setToken(storedToken);
      setUser(jwt_decode(localStorage.getItem("token")));
      setSelect(jwt_decode(localStorage.getItem("token")).type);
      setidHos(jwt_decode(localStorage.getItem("token")).userId);
    }
  }, []);

  const updateToken = (newToken) => {
    localStorage.setItem("token", newToken);
    setToken(newToken);
    setUser(jwt_decode(localStorage.getItem("token")));
  };

  const delettionForPosts = async (word, id) => {
    await axios
      .delete(
        `https://infant-diary-backend.onrender.com/api/v1/${word}/${id}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            token: `${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setChangePost(!changePost);
          alert(res.data.message);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const [loudingHospValues, setLoudingHospValues] = useState(false);
  const [changingHospValues, setChangingHospValues] = useState(false);

  const detailshos2 = async () => {
    setLoudingHospValues(true);
    await axios
      .get(
        `https://infant-diary-backend.onrender.com/api/v1/hospital/${
          jwt_decode(localStorage.getItem("token")).userId
        }`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            token: `${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          setDetails(res.data.hospital);
          setLoudingHospValues(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const [louding1, setLouding1] = useState(false);

  const [HospitalsIdDetails, setHospitalsIdDetails] = useState({});
  const HospitalById = async (id) => {
    setLouding1(true);
    await axios
      .get(`https://infant-diary-backend.onrender.com/api/v1/hospital/${id}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
          token: `${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setHospitalsIdDetails(res.data.hospital);
          setLouding1(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <vacBabyContext.Provider
      value={{
        detailshos2,
        delettionForPosts,
        babies,
        vacc,
        vaccLoud,
        x,
        setX,
        addvac,
        Detailschild,
        loud2,
        token,
        setToken,
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
        setSelect,
        changeQuis,
        setChangeQuis,
        changeVacc,
        setChangeVacc,
        annonce,
        annonceloud,
        changeannonce,
        announcements,
        setChangeAnnonce,
        information1,
        infoLoud,
        changeInfo,
        setChangeInfo,
        informationDetails,
        standards,
        standardsLoud,
        changeStandards,
        setChangeStandards,
        standardDetails,
        pendDoctor,
        pendDoctorLoud,
        changePendDoctor,
        setchangePendDoctor,
        pendHospital,
        pendHospitalLoud,
        changePendHospital,
        setchangePendHospital,
        pendingHospitals,
        pendingDoctors,
        hospital,
        loudHosp,
        hospitalDetails,
        parent,
        loudParent,
        parentDetails,
        HospitalChange,
        setHospitalChange,
        doctorChange,
        setDoctorChange,
        parentChange,
        setParentChange,
        hospitalBlk,
        loudHospBlk,
        HospitalChangeBlk,
        hospitalBlk1,
        setHospitalChangeBlk,
        parentBlk,
        parentChangeBlk,
        loudParentBlk,
        parentBlk1,
        setParentChangeBlk,
        loudDoctorBlk,
        doctorBlk,
        setDoctorChangeBlk,
        doctorBlk1,
        DoctorChangeBlk,
        deletion,
        setChangeComment,
        changeComment,
        searchVac,
        quisSearch,
        standardSearch,
        hospitalSearch,
        setParentBlk,
        setDoctorBlk,
        setHospitalBlk,
        details,
        loudingHospValues,
        updateToken,
        user,
        clinics,
        clinicChange,
        setClinicChange,
        clinicDetails,
        clinicLoud,
        doctorInfoChange,
        doctorInfoLoud,
        setDoctorInfochange,
        doctorinfo,
        docinfo,
        clinicksDoctor,
        idhos,
        setIdxDoc,
        idxDoc,
        setChangingHospValues,
        changingHospValues,
        setHospitalsIdDetails,
        HospitalById,
        HospitalsIdDetails,
        parentdata,
        firebaseUser,
        setFirebaseUser,
      }}
    >
      {children}
    </vacBabyContext.Provider>
  );
};

export { VacBabydata, vacBabyContext };
