import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h3>{props.results.word}</h3>
        {props.results.phonetics.map(function (phonetics, index) {
          return (
            <div key={index}>
              <Phonetics phonetic={phonetics} />
            </div>
          );
        })}
        <section>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
