import React from "react";
import { Alert, Button, Container, Spinner, Table } from "react-bootstrap";
import delete1 from "../../assets/wdel.png";
import approval from "../../assets/approve.png";
import { useContext, useEffect } from "react";
import { vacBabyContext } from "../../data/vacBabydata";
import Hosp from "../../assets/hospital.avif";
import doctor from "../../assets/docc.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Pending = () => {
  const data1 = useContext(vacBabyContext);
  const nav = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      data1.setX1(true);
    }, 1000);
    data1.pendingHospitals();
    data1.pendingDoctors();
  }, [data1.changePendHospital]);
  const word='doctor'

  const approveHospital = async (id1) => {
    await axios
      .put(
        `https://infant-diary-backend.onrender.com/api/v1/admin/AcceptHospital/${id1}`,
        {},
        {
          headers: {
            token: `${localStorage.getItem("token")}`,
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          data1.setchangePendHospital(!data1.changePendHospital);
        } else {
          alert(res.data.Error);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const approveDoctor = async (id1) => {
    await axios
      .put(
        `https://infant-diary-backend.onrender.com/api/v1/admin/AcceptDoctor/${id1}`,
        {},
        {
          headers: {
            token: `${localStorage.getItem("token")}`,
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          data1.setchangePendHospital(!data1.changePendHospital);
        } else {
          alert(res.data.Error);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
 

  return (
    <Container className="py-2 bg-white" id="contvac">
      <Container className="mx-auto pt-1">
        <div className="d-flex justify-content-between py-auto">
          <h1 style={{ color: "blue" }}>Pending Users</h1>
        </div>
        <hr className="mb-3" />

        <div style={{ overflow: "scroll" }}>
          <div></div>
          {data1.pendDoctor.length === 0 &&
            data1.pendHospital.length === 0 &&
            !data1.pendDoctorLoud &&
            !data1.pendHospitalLoud && (
              <p className="align-self-center">
                <Alert variant="warning">There is no pending users</Alert>
              </p>
            )}
          {((data1.pendHospital.length === 0 && data1.pendHospitalLoud) ||
            (data1.pendDoctor.length === 0 && data1.pendDoctorLoud)) && (
            <div className="d-flex justify-content-center">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>{" "}
            </div>
          )}

          {(data1.pendHospital.length >= 1 || data1.pendDoctor.length >= 1) &&
          !data1.pendHospitalLoud &&
          !data1.pendDoctorLoud ? (
            <Table
              responsive="xs"
              className="me-auto my-auto text-center"
              striped
              style={{}}
            >
              <tbody>
                <tr
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    borderBottom: "1px solid",
                  }}
                  className="bg-light"
                >
                  <td>
                    <h6
                      className="mx-3"
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverFlow: "ellipsis",
                        marginTop: "0rem",
                      }}
                    >
                      Name
                    </h6>
                  </td>
                  <td>
                    <h6
                      className="mx-3"
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverFlow: "ellipsis",
                        marginTop: "0rem",
                      }}
                    >
                      Role
                    </h6>
                  </td>
                  <td>
                    <h6
                      className="mx-3"
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverFlow: "ellipsis",
                        marginTop: "0rem",
                      }}
                    >
                      Email
                    </h6>
                  </td>
                  <td
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverFlow: "ellipsis",
                    }}
                  >
                    <h6
                      style={{
                        marginTop: "0rem",
                        fontWeight: "normal",
                      }}
                    >
                      Acctions
                    </h6>
                  </td>
                </tr>
                {data1.pendHospital.length >= 1 ? (
                  data1.pendHospital.map(({ email, role, name, _id }) => (
                    <tr key={_id} style={{ cursor: "pointer" }}>
                      <td onClick={()=>nav(`/pendingHospital/${_id}`)}>
                        <div
                          className="d-flex"
                          style={{
                            whiteSpace: "nowrap",
                            width: "fit-content",
                            cursor: "pointer",
                          }}
                        >
                          <img
                            src={Hosp}
                            alt=""
                            className="ms-4 px-0  rounded-pill img-responsive"
                            style={{
                              height: "55px",
                              width: "55px",
                              marginTop: "-.3rem",
                            }}
                          />
                          <h6
                            className="ms-3"
                            style={{
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverFlow: "ellipsis",
                              marginTop: "1rem",
                              cursor: "pointer",
                            }}
                          >
                            {name}
                          </h6>
                        </div>
                      </td>
                      <td style={{ cursor: "pointer" }} onClick={()=>nav(`/pendingHospital/${_id}`)}>
                        <h6
                          className=""
                          style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverFlow: "ellipsis",
                            marginTop: "1rem",
                          }}
                        >
                          {role}
                        </h6>
                      </td>
                      <td style={{ cursor: "pointer" }} onClick={()=>nav(`/pendingHospital/${_id}`)}>
                        <h6
                          className="mx-3"
                          style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverFlow: "ellipsis",
                            marginTop: "1rem",
                          }}
                        >
                          {email}
                        </h6>
                      </td>
                      <td
                        style={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverFlow: "ellipsis",
                        }}
                      >
                        <Button
                          variant="primary"
                          className=" mt-2 mx-3"
                          style={{ color: "white" }}
                          onClick={() => approveHospital(_id)}
                        >
                          <img
                            src={approval}
                            alt=""
                            className="me-2"
                            style={{
                              height: "18px",
                              width: "18px",
                              cursor: "pointer",
                              marginTop: "-.2rem",
                            }}
                          />
                          approve
                        </Button>
                        <Button variant="danger" className=" mt-2 mx-3">
                          <img
                            src={delete1}
                            alt=""
                            className="me-2"
                            style={{
                              height: "18px",
                              width: "18px",
                              cursor: "pointer",
                              marginTop: "-.2rem",
                            }}
                          />
                          Remove
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <></>
                )}
                {data1.pendDoctor.length >= 1 ? (
                  data1.pendDoctor.map(({ email, role, name, _id }) => (
                    <tr key={_id} style={{ cursor: "pointer" }}>
                      <td style={{ cursor: "pointer" }} onClick={()=>nav(`/pendingDoctor/${_id}`)}>
                        <div
                          className="d-flex"
                          style={{
                            whiteSpace: "nowrap",
                            width: "fit-content",
                          }}
                        >
                          <img
                            src={doctor}
                            alt=""
                            className="ms-4 px-0  rounded-pill img-responsive"
                            style={{
                              height: "55px",
                              width: "55px",
                              marginTop: "-.3rem",
                              cursor: "pointer",
                            }}
                          />
                          <h6
                            className="ms-3"
                            style={{
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverFlow: "ellipsis",
                              marginTop: "1rem",
                              cursor: "pointer",
                            }}
                          >
                            {name}
                          </h6>
                        </div>
                      </td>
                      <td onClick={()=>nav(`/pendingDoctor/${_id}`)}>
                        <h6
                          className=""
                          style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverFlow: "ellipsis",
                            marginTop: "1rem",
                            cursor: "pointer",
                          }}
                        >
                          {role}
                        </h6>
                      </td>
                      <td style={{ cursor: "pointer" }} onClick={()=>nav(`/pendingDoctor/${_id}`)}>
                        <h6
                          className="mx-3"
                          style={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverFlow: "ellipsis",
                            marginTop: "1rem",
                          }}
                        >
                          {email}
                        </h6>
                      </td>
                      <td
                        style={{
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverFlow: "ellipsis",
                          cursor: "pointer",
                        }}
                      >
                        <Button
                          variant="primary"
                          className=" mt-2 mx-3"
                          style={{ color: "white" }}
                          onClick={() => approveDoctor(_id)}
                        >
                          <img
                            src={approval}
                            alt=""
                            className="me-2"
                            style={{
                              height: "18px",
                              width: "18px",
                              cursor: "pointer",
                              marginTop: "-.2rem",
                            }}
                          />
                          approve
                        </Button>
                        <Button variant="danger" className=" mt-2 mx-3">
                          <img
                            src={delete1}
                            alt=""
                            className="me-2"
                            style={{
                              height: "18px",
                              width: "18px",
                              cursor: "pointer",
                              marginTop: "-.2rem",
                            }}
                            onClick={()=>data1.deletion(word,_id)}
                          />
                          Remove
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <></>
                )}
              </tbody>
            </Table>
          ) : (
            <></>
          )}
        </div>
      </Container>
    </Container>
  );
};

export default Pending;
