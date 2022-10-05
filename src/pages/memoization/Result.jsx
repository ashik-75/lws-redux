import React from "react";

const Result = ({ value }) => {
  console.log("final result page ");
  return <div>Result is - {value}</div>;
};

export default React.memo(Result);
