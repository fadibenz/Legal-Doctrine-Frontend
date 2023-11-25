import { SearchBar } from "../../components";

import { useField } from "../../hooks/useField";

import { TbHeartPlus } from "react-icons/tb";
import { TfiSearch } from "react-icons/tfi";

import "./PokemonTable.scss";
import DataTable from "./DataTable/DataTable";
import Pagination from "../../components/Pagination/Pagination";

import { useEffect, useState } from "react";
import { getData } from "../../services/pokemon";
import { calculatePower } from "../../utils/helper";

const tableHead = [
  "ID",
  "name",
  "type",
  "health",
  "attack",
  "defense",
  "special_attack",
  "special_defense",
  "speed",
];

export default function PokemonTable() {
  const searchInput = useField("text");
  const powerTH = useField("number");

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [data, setData] = useState(null);
  const [filterData, setFilterData] = useState(null);
  const [power, setPower] = useState({
    max: 0,
    min: 0,
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  const handlePowerChange = (data) => {
    if (data) {
      const { max, min } = data.reduce(
        (acc, item) => {
          const total = calculatePower(item);

          acc.max = Math.max(acc.max, total);
          acc.min = Math.min(acc.min, total);

          return acc;
        },
        { max: -Infinity, min: Infinity }
      );
      setPower({ min, max });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getData(page, rowsPerPage);
      setData(response);
      console.log("response", response);
      setFilterData(response);
      handlePowerChange(response);
    };
    fetchData();
  }, [page, rowsPerPage]);

  useEffect(() => {
    if (searchInput.value != "") {
      const newData = data.filter((pokemon) =>
        pokemon.name.toUpperCase().includes(searchInput.value.toUpperCase())
      );
      setFilterData(newData);
      handlePowerChange(newData);
    } else {
      setFilterData(data);
      handlePowerChange(data);
    }
  }, [searchInput]);

  useEffect(() => {
    if (powerTH.value != "") {
      const newData = data.filter(
        (pokemon) => calculatePower(pokemon) >= powerTH.value
      );
      setFilterData(newData);
      handlePowerChange(newData);
    } else {
      setFilterData(data);
      handlePowerChange(data);
    }
  }, [powerTH]);

  return (
    <section className='Container'>
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
          <p>Min power: {power.min}</p>
          <p>Max power: {power.max}</p>
        </div>
      </article>
      <article>
        <DataTable data={filterData} tableHead={tableHead} />
        <Pagination
          count={809}
          page={page}
          rowsPerPage={rowsPerPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </article>
    </section>
  );
}
