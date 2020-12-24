import React from "react";
import tick from "./image/tick.svg";
import circle from "./image/circle.svg";

export default function SectionFour() {
  return (
    <div
      className="sectionfour"
      style={{ paddingBottom: "100px", paddingTop: "50px" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-2"></div>

          <div className="col-8">
            <div className="row">
              <div className="col-12 text-center">
                <p
                  style={{
                    color: "#CE66EF",
                  }}
                >
                  Pricing Plan
                </p>
                <h4>Choose your pricing policy</h4>
              </div>
              <div className="col-12">
                <br />
                <br />
              </div>

              <div className="col-12">
                <div className="row">
                  <div className="col-6 text-right pr-0">
                    <button className="btn" style={{ background: "#F7F8FB" }}>
                      <p
                        style={{
                          background: "#fff",
                          marginBottom: "0px",
                          padding: "1px 10px 1px 10px",
                          borderRadius: "3px",
                        }}
                      >
                        {" "}
                        Monthly Plan
                      </p>
                    </button>
                  </div>

                  <div className="col-6 text-left pl-0">
                    <button
                      className="btn"
                      style={{
                        background: "#F7F8FB",
                        borderRadius: "0px",
                        paddingBottom: "8px",
                      }}
                    >
                      Annual Plan
                    </button>
                  </div>

                  <div className="col-12">
                    <br />
                    <br />
                  </div>
                </div>
              </div>

              <div
                className="col-5 p-4 mr-2 ml-5"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 5px",
                  borderRadius: "5px",
                }}
              >
                <p>Premium</p>

                <p style={{ fontSize: "12px" }}>For startup enterprise</p>

                <div className="row">
                  <div className="col-1 text-center">
                    <img
                      src={tick}
                      alt=""
                      srcSet=""
                      style={{ height: "15px" }}
                    />
                  </div>
                  <div className="col-10 pt-1">
                    <p style={{ fontSize: "12px" }}>
                      Ultimate access to all course, exercises and assessments
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-1">
                    <img
                      src={tick}
                      alt=""
                      srcSet=""
                      style={{ height: "15px" }}
                    />
                  </div>
                  <div className="col-10 pt-1">
                    <p style={{ fontSize: "12px" }}>
                      Free acess for all kind of exercise corrections with
                      downloads.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-1">
                    <img
                      src={tick}
                      alt=""
                      srcSet=""
                      style={{ height: "15px" }}
                    />
                  </div>
                  <div className="col-10 pt-1">
                    <p style={{ fontSize: "12px" }}>
                      Total assessment corrections with free download access
                      system
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-1">
                    <img
                      src={tick}
                      alt=""
                      srcSet=""
                      style={{ height: "15px" }}
                    />
                  </div>
                  <div className="col-10 pt-1">
                    <p style={{ fontSize: "12px" }}>
                      Unlimited download of courses on the mobile app contents
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-1">
                    <img
                      src={tick}
                      alt=""
                      srcSet=""
                      style={{ height: "15px" }}
                    />
                  </div>
                  <div className="col-10 pt-1">
                    <p style={{ fontSize: "12px" }}>
                      Download and print courses and exercises in PDF
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-1">
                    <img
                      src={tick}
                      alt=""
                      srcSet=""
                      style={{ height: "15px" }}
                    />
                  </div>
                  <div className="col-10 pt-1">
                    <p style={{ fontSize: "12px" }}>
                      Ultimate access to all course, exercises and assessments
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 pb-3">
                    <br />
                  </div>
                  <div className="col-12 text-center">
                    <button
                      className="btn"
                      style={{
                        color: "#fff",
                        background: "#E20000",
                        fontSize: "10px",
                        paddingTop: "15px",
                        paddingBottom: "15px",
                        width: "60%",
                        // paddingRight: "20px",
                        // paddingLeft: "20px",
                      }}
                    >
                      Start free trail{" "}
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="col-5 ml-2 p-4"
                style={{
                  boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 5px",
                  borderRadius: "5px",
                  border: "2px solid #3FDBB1",
                }}
              >
                <div className="row">
                  <div className="col-12 pb-2">
                    <button
                      className="btn"
                      style={{
                        color: "#fff",
                        background: "#EF9E48",
                        fontSize: "10px",
                      }}
                    >
                      Recommended
                    </button>
                  </div>
                  <div className="col-7">
                    <p>Free Plan</p>

                    <p style={{ fontSize: "12px" }}>
                      For Small teams or office
                    </p>
                  </div>

                  <div className="col-5">
                    <p style={{ fontSize: "12px" }}>Starting from</p>
                    <p style={{ color: "#25CB9E" }}>49.99/mo</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-1">
                    <img
                      src={tick}
                      alt=""
                      srcSet=""
                      style={{ height: "15px" }}
                    />
                  </div>
                  <div className="col-10 pt-1">
                    <p style={{ fontSize: "12px" }}>
                      Ultimate access to all course, exercises and assessments
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-1">
                    <img
                      src={tick}
                      alt=""
                      srcSet=""
                      style={{ height: "15px" }}
                    />
                  </div>
                  <div className="col-10 pt-1">
                    <p style={{ fontSize: "12px" }}>
                      Free acess for all kind of exercise corrections with
                      downloads.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-1">
                    <img
                      src={tick}
                      alt=""
                      srcSet=""
                      style={{ height: "15px" }}
                    />
                  </div>
                  <div className="col-10 pt-1">
                    <p style={{ fontSize: "12px" }}>
                      Total assessment corrections with free download access
                      system
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-1">
                    <img
                      src={tick}
                      alt=""
                      srcSet=""
                      style={{ height: "15px" }}
                    />
                  </div>
                  <div className="col-10 pt-1">
                    <p style={{ fontSize: "12px" }}>
                      Unlimited download of courses on the mobile app contents
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-1">
                    <img
                      src={tick}
                      alt=""
                      srcSet=""
                      style={{ height: "15px" }}
                    />
                  </div>
                  <div className="col-10 pt-1">
                    <p style={{ fontSize: "12px" }}>
                      Download and print courses and exercises in PDF
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-1">
                    <img
                      src={tick}
                      alt=""
                      srcSet=""
                      style={{ height: "15px" }}
                    />
                  </div>
                  <div className="col-10 pt-1">
                    <p style={{ fontSize: "12px" }}>
                      Ultimate access to all course, exercises and assessments
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 text-center">
                    <button
                      className="btn"
                      style={{
                        color: "#fff",
                        background: "#E20000",
                        fontSize: "10px",
                        paddingTop: "15px",
                        paddingBottom: "15px",
                        width: "60%",
                        // paddingRight: "20px",
                        // paddingLeft: "20px",
                      }}
                    >
                      Subscribe Now{" "}
                    </button>
                  </div>
                </div>
              </div>

              {/* <div className="col-6">thw</div> */}
            </div>
          </div>

          <div className="col-2" style={{ marginTop: "350px" }}>
            <img src={circle} alt="" srcSet="" />
          </div>
        </div>
      </div>
    </div>
  );
}
