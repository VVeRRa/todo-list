import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import { ToDoContext } from "../../libs/ToDoContext";
import CustomText from "../../components/text/CustomText";
import CustomTextInput from "../../components/input/CustomTextInput";
import CustomButton from "../../components/button/CustomButton";
import ToDoItem from "../../components/item/ToDoItem";

import "./_toDoList.scss";

const ToDoList = () => {
  const {
    itemInputValue,
    showErrorMessageInList,
    handleDeleteItemInput,
    handleCreateItem,
    handleDeleteItem,
    handleItemInputChange,
    findCorrectListNameById,
    findCorrectListItemById,
  } = useContext(ToDoContext);

  let { slug } = useParams();
  if (!findCorrectListNameById(slug)) {
    return <h1 className="to-do-list_not-found">Page not found</h1>;
  }

  const handleDeleteOfItem = (eventId) => {
    handleDeleteItem(slug, eventId);
  };

  const handleCreate = () => {
    handleCreateItem(slug);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") handleCreate();
  };

  const currentList = findCorrectListItemById(slug);
  console.log("List", currentList);

  return (
    <section className="to-do-list_container">
      <div className="to-do-list_input-and-button-wrapper">
        <CustomText>{findCorrectListNameById(slug)} TODO list:</CustomText>
        <CustomTextInput
          placeholder="Create new TODO item:"
          onChange={handleItemInputChange}
          onDeleteClick={handleDeleteItemInput}
          value={itemInputValue}
          onkeydown={handleKeyDown}
          showErrorMessage={showErrorMessageInList}
        />
        <CustomButton onClick={handleCreate} className={"createToDoList"}>
          Create
        </CustomButton>
      </div>
      <ul>
        {currentList.items.map((item) => {
          return (
            <div key={item.id}>
              {item.value && (
                <li>
                  <ToDoItem
                    slug={slug}
                    item={item}
                    onDeleteClick={handleDeleteOfItem}
                  />
                </li>
              )}
            </div>
          );
        })}
      </ul>
    </section>
  );
};

export default ToDoList;
