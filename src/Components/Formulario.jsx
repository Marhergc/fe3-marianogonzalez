// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Card from "./Card";

const Formulario = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [error, setError] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input1.trim().length < 3 || input1.startsWith(" ") || input2.length < 6) {
      setError(true);
      setSubmittedData(null);
    } else {
      setError(false);
      setSubmittedData({ input1, input2 });
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre de la banda:</label>
          <input
            type="text"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Descripción:</label>
          <input
            type="text"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {error && <p className="error-message">Por favor chequea que la información sea correcta</p>}
      {submittedData && <Card data={submittedData} />}
    </div>
  );
};

export default Formulario;