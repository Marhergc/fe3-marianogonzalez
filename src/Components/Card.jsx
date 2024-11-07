// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

const Card = ({ data }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "20px", marginTop: "20px" }}>
      <h3>Datos ingresados:</h3>
      <p>Nombre de la banda: {data.input1}</p>
      <p>Descripción: {data.input2}</p>
    </div>
  );
};

Card.propTypes = {
  data: PropTypes.shape({
    input1: PropTypes.string.isRequired,
    input2: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card;