import React, { useContext } from "react";
import { ToDoContext } from "../../libs/ToDoContext";

import CustomTextInput from "../../components/input/CustomTextInput";
import CustomText from "../../components/text/CustomText";
import CustomButton from "../../components/button/CustomButton";
import ToDoListItem from "../../components/item/ToDoListItem";

import "./_home.scss";

const Home = () => {
  const {
    toDoListStored,
    handleListItemInputChange,
    handleCreateList,
    listItemInputValue,
    handleDeleteListInput,
    handleDeleteListItem,
  } = useContext(ToDoContext);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") handleCreateList();
  };

  return (
    <section className="home_container">
      <div className="home_input-and-button-wrapper">
        <CustomText>Create a TODO list:</CustomText>
        <CustomTextInput
          onChange={handleListItemInputChange}
          placeholder="Name of TODO list"
          value={listItemInputValue}
          onDeleteClick={handleDeleteListInput}
          onkeydown={handleKeyDown}
        />
        <CustomButton onClick={handleCreateList}>Create</CustomButton>
      </div>
      <ul>
        {toDoListStored.map((item) => (
          <div key={item.id}>
            {item.value && (
              <li>
                <ToDoListItem
                  item={item}
                  onDeleteClick={handleDeleteListItem}
                />
              </li>
            )}
          </div>
        ))}
      </ul>
    </section>
  );
};

export default Home;
