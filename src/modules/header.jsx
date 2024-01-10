import React from 'react';


export default function Header({item = "Cargo Orders"}){
  return(
    <nav className="navbar">
      <ul>
        <li>
          <a className="back-arrow" href="#"></a>
        </li>
        <li><a href="#"><b>{`${item}`}</b></a></li>
        <li>
          <a className="notification" href="#"></a>
        </li>
      </ul>
    </nav>
  );
}
