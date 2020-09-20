import React from "react";

import "./_customText.scss";

const CustomText = ({ children }) => {
  return <h5 className="custom-text_container">{children}</h5>;
};

export default CustomText;
