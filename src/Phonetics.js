import React from "react";
import "./Phonetics.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faVolumeLow } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faCirclePlay} />
      </a>
      <em>{props.phonetic.text}</em>
    </div>
  );
}
