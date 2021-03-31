import React from "react";
import PropTypes from "prop-types";

export default function Dashboard({ id }) {
  return <div>{id}</div>;
}

Dashboard.propTypes = {
  id: PropTypes.string.isRequired,
};
