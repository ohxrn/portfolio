import React from "react";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import Js from "./Js";
import { ReactComp } from "./ReactComp";
import { Python } from "./Python";
import { Data } from "./Data";

export const Home = () => {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "turquoise" }}>My Technology Expertise </h1>
        <div style={{ display: "flex", minWidth: "450px" }}>
          <div style={{ flex: "1" }}>
            <ReactComp />
          </div>
          <div style={{ flex: "1" }}>
            <Js />
          </div>
          <div style={{ flex: "1" }}>
            <Python />
          </div>
          <div style={{ flex: "1" }}>
            <Data />
          </div>
        </div>
      </div>
      <div style={{ height: "1850px", marginTop: "105px" }}>
        <h1
          style={{ color: "turquoise", marginLeft: "35px", fontSize: "5rem" }}
        >
          Education
        </h1>
        <div
          style={{
            borderLeft: "9px solid turquoise",
            height: "300px",
            marginLeft: "95px",
            marginTop: "55px",
            display: "flex",
          }}
        >
          <h1
            style={{
              color: "turquoise",
              marginLeft: "35px",
              fontSize: "4rem",
            }}
          >
            Coding Dojo
          </h1>
          <img
            style={{ minWidth: "100px", height: "100px", marginLeft: "50px" }}
            src="./src/assets/CD.png"
          />
        </div>
        <div
          style={{
            borderTop: "9px solid turquoise",
            marginLeft: "35px",
            width: "170px",
          }}
        ></div>
        <h1
          style={{ color: "turquoise", fontSize: "4rem", marginLeft: "45px" }}
        >
          Experiences
        </h1>
        <div
          style={{
            borderTop: "9px solid turquoise",
            width: "170px",
            marginLeft: "35px",
          }}
        >
          Yo
        </div>
      </div>
    </>
  );
};
