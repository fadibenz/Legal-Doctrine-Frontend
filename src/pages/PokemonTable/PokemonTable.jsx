import { useEffect, useState } from "react";
import { getData } from "../../services/pokemon";
import { sliceData, handlePowerChange } from "../../utils/helper";
import { DataTable } from "../../components";
import { TablePagination } from "@mui/material";

import "./PokemonTable.scss";
import SummarySection from "../../components/SummarySection/SummarySection";

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

  // fetching data
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

  // slicing data for pagination
  useEffect(() => {
    const newData = sliceData(changeData.filteredData, page, rowsPerPage);
    setChangeData({ ...changeData, slicedData: newData });
    handlePowerChange(newData, setPower);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, rowsPerPage, changeData.filteredData]);

  return (
    <section className='Container'>
      <SummarySection
        data={data.data}
        setChangeData={setChangeData}
        changeData={changeData}
        power={power}
      />
      <DataTable data={changeData.slicedData} tableHead={tableHead} />
      <TablePagination
        component='div'
        count={changeData.count}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 15]}
      />
    </section>
  );
}
