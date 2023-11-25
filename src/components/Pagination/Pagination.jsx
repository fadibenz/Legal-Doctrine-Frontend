import TablePagination from "@mui/material/TablePagination";

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
