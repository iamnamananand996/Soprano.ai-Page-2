import React from "react";

import arrowleft from "./image/arrowleft.svg";
import arrowright from "./image/arrowright.svg";

export default function SectionTwo() {
  return (
    <div className="sectiontwo">
      <div className="container">
        <div className="row">
          <div className="col-12" style={{ paddingTop: "150px" }}></div>

          <div className="col-1"></div>

          <div className="col-10">
            <div className="row">
              <div className="col-12 text-center">
                <p style={{ color: "#CE66EF" }}>Quality features</p>
                <h4>Popular Designing Course</h4>
              </div>

              <div className="col-12">
                <div className="row">
                  <div className="col-12">
                    <br />
                  </div>
                  <div className="col-2 text-right ml-5">
                    <img
                      src={arrowleft}
                      alt=""
                      srcSet=""
                      style={{ height: "15px" }}
                    />
                  </div>
                  <div className="col-1 pt-1">
                    <p
                      style={{
                        fontSize: "8px",
                        background: "#E85252",
                        color: "#FFF",
                        padding: "4px 10px 4px 7px",
                        borderRadius: "5px",
                      }}
                    >
                      Marketing
                    </p>
                  </div>
                  <div className="col-1 pt-1">
                    {" "}
                    <p
                      style={{
                        fontSize: "8px",
                        background: "#C9C9C9",
                        color: "#FFF",
                        padding: "4px 10px 4px 7px",
                        borderRadius: "5px",
                        marginRight: "-13px",
                      }}
                    >
                      {" "}
                      E-commerce{" "}
                    </p>
                  </div>
                  <div className="col-1 text-center pt-1">
                    {" "}
                    <p
                      style={{
                        fontSize: "8px",
                        background: "#C9C9C9",
                        color: "#FFF",
                        padding: "4px 10px 4px 7px",
                        borderRadius: "5px",
                        marginRight: "-13px",
                      }}
                    >
                      UX Design
                    </p>{" "}
                  </div>
                  <div className="col-1 text-right pt-1">
                    {" "}
                    <p
                      style={{
                        fontSize: "8px",
                        background: "#C9C9C9",
                        color: "#FFF",
                        padding: "4px 16px 4px 0px",
                        borderRadius: "5px",
                        marginRight: "-20px",
                      }}
                    >
                      UI Design
                    </p>{" "}
                  </div>
                  <div
                    className="col-2 pr-0 pl-0 text-center pt-1"
                    style={{ marginRight: "-18px" }}
                  >
                    {" "}
                    <p
                      style={{
                        fontSize: "8px",
                        background: "#C9C9C9",
                        color: "#FFF",
                        padding: "4px 20px 4px 20px",
                        borderRadius: "5px",
                        marginRight: "40px",
                        marginLeft: "25px",
                      }}
                    >
                      Course Creator
                    </p>
                  </div>
                  <div className="col-1 text-left pl-0 pt-1">
                    {" "}
                    <p
                      style={{
                        fontSize: "8px",
                        background: "#C9C9C9",
                        color: "#FFF",
                        padding: "4px 1px 4px 10px",
                        borderRadius: "5px",
                        marginRight: "0px",
                      }}
                    >
                      App Creator
                    </p>
                  </div>
                  <div className="col-2 text-left">
                    <img
                      src={arrowright}
                      alt=""
                      srcSet=""
                      style={{ height: "15px" }}
                    />
                  </div>
                </div>
              </div>
              <div
                className="col-12"
                style={{ height: "450px", background: "#C4C4C4" }}
              ></div>

              <div className="col-12">
                <br />
              </div>

              <div className="col-12">
                <div className="row">
                  <div className="col-1"></div>

                  <div className="col-10">
                    <button
                      className="btn"
                      style={{
                        width: "100%",
                        background: "#E20000",
                        color: "#fff",
                        paddingTop: "0px",
                        paddingBottom: "0px",
                        borderRadius: "25px",
                        fontSize: "40px",
                      }}
                    >
                      Enroll Now
                    </button>
                  </div>

                  <div className="col-1"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-1"></div>

          <div className="col-12" style={{ paddingTop: "150px" }}></div>
        </div>
      </div>
    </div>
  );
}
