import { useEffect, useState } from "react";
import { getData } from "../../services/pokemon";
import {
  calculatePower,
  sliceData,
  handlePowerChange,
} from "../../utils/helper";
import { useDebounce } from "../../hooks/useDebounce";
import { useField } from "../../hooks/useField";
import { Pagination, DataTable, SearchBar } from "../../components";
import { TbHeartPlus } from "react-icons/tb";
import { TfiSearch } from "react-icons/tfi";
import "./PokemonTable.scss";

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
  // State to save all data
  const [data, setData] = useState({
    data: [],
    count: 0,
  });

  // state for modified data (sliced or filtered)
  const [changeData, setChangeData] = useState({
    filteredData: [],
    slicedData: [],
    count: 0,
  });

  // MUI pagination states
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const searchInput = useField("");
  const powerTH = useField("");
  const debounceSearch = useDebounce(searchInput.value, 300);
  const debouncePower = useDebounce(powerTH.value, 300);

  const [power, setPower] = useState({
    min: 0,
    max: 0,
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData();
        setData({
          data: response.data,
          count: response.count,
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const newData = sliceData(changeData.filteredData, page, rowsPerPage);
    setChangeData({ ...changeData, slicedData: newData });
    handlePowerChange(newData, setPower);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, rowsPerPage, changeData.filteredData]);

  useEffect(() => {
    const searchData = async () => {
      let newData = data.data;
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
        <DataTable data={changeData.slicedData} tableHead={tableHead} />
        <Pagination
          count={changeData.count}
          page={page}
          rowsPerPage={rowsPerPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </article>
    </section>
  );
}
