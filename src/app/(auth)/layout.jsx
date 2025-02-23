import React from "react";
import "@/styles/pages/authentication/auth.scss";
const layout = ({ children }) => {
  return (
    <div className="authentication-container">
      <div className="authentication-container__logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <div className="authentication-container__body">{children}</div>
    </div>
  );
};

export default layout;
