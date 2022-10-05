import { Button, Text, VStack } from "@chakra-ui/react";
import { useCallback, useMemo, useRef, useState } from "react";
import Decrement from "./Decrement";
import Increment from "./Increment";
import Result from "./Result";
import Title from "./Title";

const Memorize = () => {
  const [sum, setSum] = useState(0);
  const [value, setValue] = useState(10);

  const handleIncrement = useCallback(() => {
    setValue((prev) => prev + 1);
  }, []);

  const calculateEven = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < 1000000000; i++) {
      sum += i;
    }

    return value % 2 === 0 ? "EVEN" : "ODD";
  }, [value]);

  const handleDecrement = useCallback(() => {
    setValue((prev) => prev - 1);
  }, []);

  const ref = useRef(101);
  console.log("ref hook ", ref.current);
  return (
    <VStack>
      <Title />
      <Text>{calculateEven}</Text>
      <Increment handleIncrement={handleIncrement} />
      <Decrement handleDecrement={handleDecrement} />
      <Button onClick={() => setSum((prev) => prev + 1)}>
        Extra Sum - {sum}
      </Button>
      <Result value={value} />
    </VStack>
  );
};

export default Memorize;
