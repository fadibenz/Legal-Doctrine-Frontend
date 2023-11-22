import React from "react";
import "./SearchBar.scss";
export default function SearchBar({ state, placeholder, icon }) {
  return (
    <div className='InputBar'>
      <input
        className='InputBar__Field'
        {...state}
        placeholder={placeholder}
      ></input>
      <div className='InputBar__Icon'>{icon}</div>
    </div>
  );
}
