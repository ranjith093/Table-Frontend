import React, { Fragment, useState } from "react";
import TableComponent from "../components/TableComponent";
import FormComponent from "../components/FormComponent";
import { Button } from "react-bootstrap";

const MainScreen = () => {
  const [show, toggleShow] = useState(false);
  
  return (
    <Fragment>
      <div
        style={{
          // margin: "1rem 1rem 1rem 0rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center"
        }}
      >
        <div style={{
          padding: "0.5rem 1rem 0.5rem 0",
          display: "flex",
          justifyContent: "flex-end",
          width:"100vw",
          paddingRight: "1rem"
        }}>
          <Button
            variant="outline-dark"
            onClick={() => toggleShow(true)}
            style={{
              maxWidth: "10rem",            
            }}
          >
            Add
          </Button>
        </div>
        <div style={{width: "100vw", paddingRight: "1rem", paddingLeft: "1rem"}}>
          <TableComponent />
        </div>
      </div>

      {show && <FormComponent toggleShow={toggleShow} />}
    </Fragment>
  );
};
export default MainScreen;
