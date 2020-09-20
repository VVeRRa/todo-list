import React from "react";
import { NavLink } from "react-router-dom";

import { ReactComponent as Bin } from "../../assets/svg/bin.svg";
import { ReactComponent as ArrowRight } from "../../assets/svg/arrow-right.svg";

import "./_todoListItem.scss";

const ToDoListItem = ({ item, onDeleteClick }) => {
  const { id, value } = item;

  const onDelete = () => {
    onDeleteClick(id);
  };

  return (
    <>
      {value && (
        <div className="to-do-list-item_container">
          <Bin className="to-do-list-item_bin" onClick={onDelete} />
          <NavLink to={`/to-do-list/${id}`}>
            <h4 data-testid="new-list">{value}</h4>
            <ArrowRight className="to-do-list-item_arrow" />
          </NavLink>
        </div>
      )}
    </>
  );
};

export default ToDoListItem;
