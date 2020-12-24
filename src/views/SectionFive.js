import React from "react";
import one from "./image/1.svg";
import two from "./image/2.svg";
import three from "./image/4.svg";
import four from "./image/4.svg";
import up from "./image/up.svg";
import down from "./image/down.svg";

export default function SectionFive() {
  return (
    <div
      className="sectionfive"
      style={{
        background: "#f8fcff",
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-1"></div>

          <div className="col-10">
            <div className="row">
              <div className="col-12 text-center">
                <p style={{ color: "#CE66EF" }}>Whats the function</p>
                <h4>Let’s see how it works</h4>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-3">
                    <div className="row">
                      <div className="col-4">
                        <img
                          src={one}
                          alt=""
                          srcSet=""
                          style={{ height: "60px" }}
                        />
                      </div>

                      <div className="col-8">
                        <img
                          src={up}
                          alt=""
                          srcSet=""
                          style={{ height: "20px" }}
                        />
                      </div>
                      <div className="col-12">
                        <br />
                      </div>
                    </div>
                    <h5>Set disbursement Instructions</h5>
                    <br />
                    <p style={{ fontSize: "12px" }}>
                      Get your blood tests delivered at home collect a sample
                      from the your blood tests.
                    </p>
                  </div>

                  <div className="col-3 pr-0 pl-0">
                    <div className="row">
                      <div className="col-4">
                        <img
                          src={two}
                          alt=""
                          srcSet=""
                          style={{ height: "60px" }}
                        />
                      </div>

                      <div className="col-8 pt-4">
                        <img
                          src={down}
                          alt=""
                          srcSet=""
                          style={{ height: "20px" }}
                        />
                      </div>
                      <div className="col-12">
                        <br />
                      </div>
                    </div>
                    <h5>Assembly retrieves funds from your account</h5>
                    <br />
                    <p style={{ fontSize: "12px" }}>
                      Get your blood tests delivered at home collect a sample
                      from the your blood tests.
                    </p>
                  </div>

                  <div className="col-3">
                    <div className="row">
                      <div className="col-4">
                        <img
                          src={three}
                          alt=""
                          srcSet=""
                          style={{ height: "60px" }}
                        />
                      </div>

                      <div className="col-8">
                        <img
                          src={up}
                          alt=""
                          srcSet=""
                          style={{ height: "20px" }}
                        />
                      </div>
                      <div className="col-12">
                        <br />
                      </div>
                    </div>
                    <h5>Assembly initiates disbursement</h5>
                    <br />
                    <p style={{ fontSize: "12px" }}>
                      Get your blood tests delivered at home collect a sample
                      from the your blood tests.
                    </p>
                  </div>

                  <div className="col-3">
                    <div className="row">
                      <div className="col-4">
                        <img
                          src={four}
                          alt=""
                          srcSet=""
                          style={{ height: "60px" }}
                        />
                      </div>

                      <div className="col-8 pt-4">
                        <img
                          src={down}
                          alt=""
                          srcSet=""
                          style={{ height: "20px" }}
                        />
                      </div>
                      <div className="col-12">
                        <br />
                      </div>
                    </div>
                    <h5>Customer receives funds payment</h5>
                    <br />
                    <p style={{ fontSize: "12px" }}>
                      Get your blood tests delivered at home collect a sample
                      from the your blood tests.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-1"></div>
        </div>
      </div>
    </div>
  );
}
