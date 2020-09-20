import React from "react";

import { ReactComponent as DeleteBtn } from "../../assets/svg/delete.svg";

import "./_customTextInput.scss";

const CustomTextInput = ({
  onChange,
  value,
  placeholder,
  onDeleteClick,
  onkeydown,
  showErrorMessage,
}) => {
  return (
    <>
      <div className="custom-text-input_container">
        <input
          data-testid="create-list-input"
          type="text"
          placeholder={placeholder}
          value={value && value}
          onChange={onChange}
          onKeyDown={onkeydown}
        />
        <DeleteBtn onClick={onDeleteClick} />
      </div>
      {showErrorMessage && (
        <p className="custom-text-input_error-message">
          You must enter a value
        </p>
      )}
    </>
  );
};

export default CustomTextInput;
