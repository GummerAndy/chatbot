import React from "react";
import PropTypes from "prop-types";
import SideBar from "./SideBar";

export default function Dashboard({ id }) {
  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <SideBar id={id} />
    </div>
  );
}

Dashboard.propTypes = {
  id: PropTypes.string.isRequired,
};
