import "./DataTable.scss";
import PropTypes from "prop-types";

export default function DataTable({ data, tableHead }) {
  if (!data) {
    return;
  }

  if (data.length === 0) {
    return <h1 className='Table__Results'>No results found</h1>;
  }
  return (
    <div className='Table__Container'>
      <table aria-label='simple table' className='Table'>
        <thead className='Table__Head'>
          <tr className='Table__Head--Row'>
            {tableHead.map((cellHead, index) => {
              return (
                <th key={index} className='Table__Head--Cell'>
                  {cellHead}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody className='Table__Body'>
          {data.map((row) => (
            <tr key={row.name} className='Table__Body--Row'>
              {Object.entries(row).map(([key, value], index) => {
                return (
                  <td data-cell={key} key={index} className='Table__Body--Cell'>
                    {value}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

DataTable.protoTypes = {
  data: PropTypes.object,
  tableHead: PropTypes.object,
};
