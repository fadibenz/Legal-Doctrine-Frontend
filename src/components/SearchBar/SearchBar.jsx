import "./SearchBar.scss";
import PropTypes from "prop-types";

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

SearchBar.protoTypes = {
  state: PropTypes.object.isRequired,
  placeholder: PropTypes.string,
  icon: PropTypes.any,
};
