import React from "react";
import image1 from "./image/image-1.svg";
import eye from "./image/eye.svg";
import star from "./image/star.svg";

export default function SectionThree() {
  return (
    <div className="section3">
      <div className="container">
        <div className="row">
          {/* <div className="col-12" style={{ paddingTop: "100px" }}></div> */}

          <div className="col-12">
            <div className="row">
              <div className="col-1"></div>

              <div className="col-10">
                <div className="row">
                  <div className="col-12 text-center">
                    <p style={{ color: "#CE66EF" }}>Quality features</p>
                    <h4>Tutorials that people love most</h4>
                  </div>
                  <div className="col-12">
                    <br />
                  </div>
                  <div
                    className="col-4 text-center p-0 pt-1"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 5px",
                      maxWidth: "300px",
                      marginRight: "15px",
                    }}
                  >
                    <img
                      src={image1}
                      alt=""
                      srcSet=""
                      style={{ height: "170px" }}
                    />

                    <div className="row p-2">
                      <div className="col-12 pt-2 pl-4 text-left">
                        <div className="row">
                          <div className="col-6">
                            <img src={star} alt="" srcSet="" />
                          </div>

                          <div className="col-6 pt-2 pl-0">
                            <p
                              style={{
                                fontSize: "10px",
                                color: "#0F2137",
                                opacity: "0.8",
                              }}
                            >
                              5.0 (392 reviews)
                            </p>
                          </div>
                        </div>

                        <p style={{ fontSize: "12px" }}>
                          <b>
                            How to work with prototype design with adobe xd
                            featuring tools
                          </b>
                        </p>
                        {/* <br /> */}
                        <div className="row">
                          <div className="col-1">
                            <img src={eye} alt="" srcSet="" />
                          </div>

                          <div className="col-8 pt-2">
                            <p
                              style={{
                                fontSize: "10px",
                                color: "#0F2137",
                                opacity: "0.8",
                              }}
                            >
                              3,532 students watched
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-4 text-center p-0 pt-1"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.15) 0px 0.5rem 2rem",
                      maxWidth: "300px",
                      marginRight: "15px",
                    }}
                  >
                    <img
                      src={image1}
                      alt=""
                      srcSet=""
                      style={{ height: "170px" }}
                    />

                    <div className="row">
                      <div className="col-12 pt-2 pl-4 text-left">
                        <div className="row">
                          <div className="col-6">
                            <img src={star} alt="" srcSet="" />
                          </div>

                          <div className="col-6 pt-2 pl-0">
                            <p
                              style={{
                                fontSize: "10px",
                                color: "#0F2137",
                                opacity: "0.8",
                              }}
                            >
                              5.0 (392 reviews)
                            </p>
                          </div>
                        </div>

                        <p style={{ fontSize: "12px" }}>
                          <b>
                            Create multiple artboard by using figma prototyping
                            tools development
                          </b>
                        </p>
                        {/* <br /> */}
                        <div className="row">
                          <div className="col-1">
                            <img src={eye} alt="" srcSet="" />
                          </div>

                          <div className="col-8 pt-2">
                            <p style={{ fontSize: "10px" }}>
                              2,538 students watched
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="col-4 text-center p-0 pt-1"
                    style={{
                      boxShadow: "rgba(0, 0, 0, 0.15) 0px 2px 5px",
                      maxWidth: "300px",
                      marginRight: "15px",
                    }}
                  >
                    <img
                      src={image1}
                      alt=""
                      srcSet=""
                      style={{ height: "170px" }}
                    />
                    <div className="row">
                      <div className="col-12 p-4 text-left">
                        <div className="row">
                          <div className="col-6">
                            <img src={star} alt="" srcSet="" />
                          </div>

                          <div className="col-6 pt-2 pl-0">
                            <p
                              style={{
                                fontSize: "10px",
                                color: "#0F2137",
                                opacity: "0.8",
                              }}
                            >
                              5.0 (392 reviews)
                            </p>
                          </div>
                        </div>
                        <p style={{ fontSize: "12px" }}>
                          <b>
                            Convert your web layout theming easily with sketch
                            zeplin extension
                          </b>
                        </p>
                        {/* <br /> */}
                        <div className="row">
                          <div className="col-1">
                            <img src={eye} alt="" srcSet="" />
                          </div>

                          <div className="col-8 pt-2">
                            <p style={{ fontSize: "10px" }}>
                              1,037 students watched
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-1"></div>
            </div>
          </div>

          <div className="col-12" style={{ paddingTop: "100px" }}></div>
        </div>
      </div>
    </div>
  );
}
