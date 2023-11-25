import TablePagination from "@mui/material/TablePagination";
import PropTypes from "prop-types";

export default function Pagination({
  page,
  handleChangePage,
  rowsPerPage,
  handleChangeRowsPerPage,
  count,
}) {
  return (
    <div>
      <TablePagination
        component='div'
        count={count}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 15]}
      />
    </div>
  );
}

Pagination.protoTypes = {
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  handleChangePage: PropTypes.func,
  handleChangeRowsPerPage: PropTypes.func,
};
