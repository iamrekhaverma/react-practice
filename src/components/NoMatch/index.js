/* eslint-disable no-unused-expressions */
import React, { useEffect } from "react";

const NotFound = ({ history, location }) => {
  useEffect(() => {
    setTimeout(() => {
      history.push("/login");
    }, 2000);
  }, [history]);
  return (
    <div>
      <h1>404 Resource not Found...</h1>
    </div>
  );
};

export default NotFound;
