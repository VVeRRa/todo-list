import React, { createContext, useState } from "react";

//following 2 libraries were advised
import cuid from "cuid";
import { useLocalStorageState } from "ahooks";

export const ToDoContext = createContext(undefined);

export const ToDoProvider = ({ children }) => {
  const [listItemInputValue, setListItemInputValue] = useState("");
  const [itemInputValue, setItemInputValue] = useState("");
  const [showErrorMessageInHome, setShowErrorMessageInHome] = useState(false);
  const [showErrorMessageInList, setShowErrorMessageInList] = useState(false);
  const [toDoListStored, setToDoListStored] = useLocalStorageState(
    "toDoListStored",
    []
  );

  const handleCreateList = () => {
    if (!listItemInputValue) {
      setShowErrorMessageInHome(true);
      return;
    }
    const updatedList = [
      ...toDoListStored,
      { items: [], value: listItemInputValue, id: cuid() },
    ];
    setToDoListStored(updatedList);
    setListItemInputValue("");
    setShowErrorMessageInHome(false);
  };

  // I was helped with this function
  const handleCreateItem = (id) => {
    if (!itemInputValue) {
      setShowErrorMessageInList(true);
      return;
    }
    const correctList = findCorrectListItemById(id);
    correctList.items.push({
      value: itemInputValue,
      id: cuid(),
      isItemChecked: false,
    });
    setToDoListStored(toDoListStored);
    setItemInputValue("");
    setShowErrorMessageInList(false);

  };

  const handleListItemInputChange = (event) =>
    setListItemInputValue(event.target.value);

  const handleItemInputChange = (event) =>
    setItemInputValue(event.target.value);

  const handleDeleteListInput = () => setListItemInputValue("");

  const handleDeleteItemInput = () => setItemInputValue("");

  const handleDeleteListItem = (id) => {
    const itemsToBePersisted = toDoListStored.filter((item) => item.id !== id);
    setToDoListStored(itemsToBePersisted);
  };

  // I was helped with this function
  const handleDeleteItem = (slug, eventId) => {
    const listItem = findCorrectListItemById(slug);
    listItem.items = listItem.items.filter((it) => it.id !== eventId);
    setToDoListStored([...toDoListStored]);
  };

  const handleIsItemChecked = (slug, itemId, event) => {
    const listItem = findCorrectListItemById(slug);
    const item = listItem.items.find((it) => it.id === itemId);
    item.isItemChecked = event.target.checked;
    setToDoListStored([...toDoListStored]);
  };

  const findCorrectListNameById = (slug) => {
    const item = toDoListStored.find((item) => item.id === slug);
    return item?.value;
  };

  const findCorrectListItemById = (slug) =>
    toDoListStored.find((item) => item.id === slug);

  const todoValue = {
    listItemInputValue,
    itemInputValue,
    toDoListStored,
    showErrorMessageInHome,
    showErrorMessageInList,
    handleCreateList,
    handleCreateItem,
    handleDeleteListInput,
    handleDeleteItemInput,
    handleListItemInputChange,
    handleItemInputChange,
    handleDeleteListItem,
    handleDeleteItem,
    handleIsItemChecked,
    findCorrectListNameById,
    findCorrectListItemById,
  };

  return (
    <ToDoContext.Provider value={todoValue}>{children}</ToDoContext.Provider>
  );
};
