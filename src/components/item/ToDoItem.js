import React from "react";

import { ReactComponent as Bin } from "../../assets/svg/bin.svg";
import CustomCheckBoxInput from "../input/CustomCheckBoxInput";

import "./_toDoItem.scss";

const ToDoItem = ({ slug, item, onDeleteClick }) => {
  const { id, value } = item;

  const onDelete = () => {
    onDeleteClick(id);
  };
  return (
    <>
      {value && (
        <div className="to-do-item_container">
          <CustomCheckBoxInput slug={slug} id={id} value={value} />
          <Bin className="to-do-list-item_bin" onClick={onDelete} />
        </div>
      )}
    </>
  );
};

export default ToDoItem;
