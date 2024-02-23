import React from 'react';
import Sav from "../images/pattern-divider-desktop.svg"
import "../styles/Advice.css"

export default function Advice({id, comment}) {
  return (
    <div>
        <h3>Advice #{id}</h3>
        <h1>{comment}</h1>
        <img src={Sav} alt="sav" />
    </div>
  )
}
