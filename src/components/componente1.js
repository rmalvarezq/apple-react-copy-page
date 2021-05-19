import React from "react";

// props = propiedades
export const componente1 = (props) => {
  return (
    <div>
      <div>
        <h1>Name</h1>
        <h2> {props.name} </h2>
      </div>
      <div>
        <h1>Profesión</h1>
        <h2> {props.profession} </h2>
      </div>
    </div>
  );
};
