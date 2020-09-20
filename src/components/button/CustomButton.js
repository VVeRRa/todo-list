import React from "react";

import "./_customButton.scss";

const CustomButton = ({ children, onClick }) => {
  return (
    <button
      data-testid="create-list-button"
      onClick={onClick}
      className="custom-button_container"
    >
      {children}
    </button>
  );
};

export default CustomButton;
