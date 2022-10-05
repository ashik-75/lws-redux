import { Button } from "@chakra-ui/react";
import React from "react";
const Decrement = ({ handleDecrement }) => {
  console.log("Decrement button");
  return (
    <div>
      <Button onClick={handleDecrement}>Decrement</Button>
    </div>
  );
};

export default React.memo(Decrement);
