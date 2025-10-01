import { Table } from "react-bootstrap";

export default function BootstrapTables() {
    return (
        <div id="wd-css-styling-tables">
  <h2>Tables</h2>
  <Table>
    <thead>
      <tr className="table-dark"><th>Quiz</th><th>Topic</th><th>Date</th><th>Grade</th></tr>
    </thead>
    <tbody>
      <tr className="table-warning"><td>Q1</td><td>HTML</td><td>2/3/21</td><td>85</td></tr>
      <tr className="table-danger"><td>Q2</td><td>CSS</td><td>2/10/21</td><td>90</td></tr>
      <tr className="table-primary"><td>Q3</td><td>JavaScript</td><td>2/17/21</td><td>90</td></tr>
    </tbody>
    <tfoot>
      <tr className="table-success border-0 border-top border-3 border-dark"><td colSpan={3} className=" border-bottom-0">Average</td><td className=" border-bottom-0">90</td></tr>
    </tfoot>
  </Table>
  <div id="wd-css-responsive-tables">
  <h2>Responsive tables</h2>
  <Table responsive>
    <thead>
      <tr><th>Very</th><th>long</th><th>set</th><th>of</th><th>columns</th>
          <th>Very</th><th>long</th><th>set</th><th>of</th><th>columns</th>
          <th>Very</th><th>long</th><th>set</th><th>of</th><th>columns</th>
      </tr>
    </thead>
    <tbody>
      <tr>
         <td>Very</td><td>long</td><td>set</td><td>of</td><td>columns</td>
         <td>Very</td><td>long</td><td>set</td><td>of</td><td>columns</td>
         <th>Very</th><th>long</th><th>set</th><th>of</th><th>columns</th>
      </tr>
    </tbody>
  </Table>
</div>
</div> ); }