import React from "react";
import { Link } from "react-router-dom";

import data from "../Data";

const Aulas = (props) => {
  return (
    <div className="page">
      <h1>Aulas</h1>
      <ul className="aulas">
        {data.map((aula) => (
          <li key={aula.id}>
            <Link className="link" to={`/aulas/${aula.id}`}>
              {aula.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Aulas;
