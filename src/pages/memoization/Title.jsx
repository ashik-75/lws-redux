import React from "react";

const Title = () => {
  console.log("title text is here");
  return <div>Title here</div>;
};

export default React.memo(Title);
