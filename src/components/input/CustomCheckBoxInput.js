import React, { useContext } from "react";
import { ToDoContext } from "../../libs/ToDoContext";

import "./_customCheckBoxInput.scss";

const CustomCheckBoxInput = ({ slug, id, value }) => {
  const { findCorrectListItemById, handleIsItemChecked } = useContext(
    ToDoContext
  );

  const onChange = (event) => {
    handleIsItemChecked(slug, id, event);
  };

  const checked = findCorrectListItemById(slug).items.find((it) => it.id === id)
    .isItemChecked;

  return (
    <div className="custom-checkbox-input_container">
      <input id={id} type="checkbox" onChange={onChange} checked={checked} />
      <label htmlFor={id}>{value}</label>
    </div>
  );
};

export default CustomCheckBoxInput;
