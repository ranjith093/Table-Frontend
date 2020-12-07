import React from "react";
import Table from "react-bootstrap/Table";
import { Dropdown } from "react-bootstrap";
const TableComponent = () => (
  <Table size="sm" bordered style={{
    // maxWidth: "60vw",
    marginRight: "0"
  }}>
    <thead>
      <tr>
        <th>#</th>
        <th>Lead Date</th>
        <th>Name</th>
        <th>Mobile No.</th>
        <th>Whatsapp No.</th>
        <th>PAN Number</th>
        <th>
          <tr>
          <td>
            <Dropdown>
              <Dropdown.Toggle variant="none" id="dropdown-basic">
                Type
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">IRDA</Dropdown.Item>
                <Dropdown.Item href="#/action-2">SAHI</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </td>
          </tr>
        </th>
        <th>Partener Company</th>
        <th>City</th>
        <th>Branch</th>
        <th>
          {" "}
          <tr>
          <td>
            <Dropdown>
              <Dropdown.Toggle variant="none" id="dropdown-basic">
                Lead Status
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Picked</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Closed</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Cooded</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Pending</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </td>
          </tr>
        </th>
        <th>Last Remark</th>
        <th>Last Status Date</th>
        <th>Lead Aging</th>
        <th>Agency Code</th>
        <th>Agency Date</th>
        <th>Code Aging</th>
        <th>
          {" "}
          <tr>
          <td>
            <Dropdown>
              <Dropdown.Toggle variant="none" id="dropdown-basic">
                Business Active
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Yes</Dropdown.Item>
                <Dropdown.Item href="#/action-2">No</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </td>
          </tr>
        </th>
        <th>Business Premium</th>
      </tr>
    </thead>
    <tbody>

    </tbody>
  </Table>
);

export default TableComponent;
