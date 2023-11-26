import { useEffect } from "react";

import { SearchBar } from "../index";

import { TbHeartPlus } from "react-icons/tb";
import { TfiSearch } from "react-icons/tfi";

import { useDebounce } from "../../hooks/useDebounce";
import { useField } from "../../hooks/useField";

import "./SummarySection.scss";
import { calculatePower } from "../../utils/helper";

import PropTypes from "prop-types";

export default function SummarySection({
  data,
  setChangeData,
  changeData,
  power,
}) {
  const searchInput = useField("text");
  const powerTH = useField("number");
  const debounceSearch = useDebounce(searchInput.value, 300);
  const debouncePower = useDebounce(powerTH.value, 300);

  useEffect(() => {
    const searchData = async () => {
      let newData = data;
      if (debounceSearch !== "") {
        newData = newData.filter((pokemon) =>
          pokemon.name.toUpperCase().includes(debounceSearch.toUpperCase())
        );
      }
      if (debouncePower !== "") {
        newData = newData.filter(
          (pokemon) => calculatePower(pokemon) >= debouncePower
        );
      }
      setChangeData({
        ...changeData,
        filteredData: newData,
        count: newData.length,
      });
    };
    searchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounceSearch, debouncePower, data]);

  return (
    <article className='Summary'>
      <div className='Summary__Search'>
        <SearchBar
          state={searchInput}
          placeholder={"Search..."}
          icon={<TfiSearch />}
        />
        <SearchBar
          state={powerTH}
          placeholder={"Power threshold"}
          icon={<TbHeartPlus />}
        />
      </div>
      <div className='Summary__Info'>
        <p>Min power: {power.min != Infinity ? power.min : 0}</p>
        <p>Max power: {power.max != -Infinity ? power.max : 0}</p>
      </div>
    </article>
  );
}

SearchBar.protoTypes = {
  data: PropTypes.object.isRequired,
  power: PropTypes.object.isRequired,
  changeData: PropTypes.object.isRequired,
  setChangeData: PropTypes.func.isRequired,
};
