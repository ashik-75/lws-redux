import { Button } from "@chakra-ui/react";
import React from "react";

const Increment = ({ handleIncrement }) => {
  console.log("Increment button");
  return (
    <div>
      <Button onClick={handleIncrement}>Increment</Button>
    </div>
  );
};

export default React.memo(Increment);
