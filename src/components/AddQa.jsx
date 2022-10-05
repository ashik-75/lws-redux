import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useState } from "react";
import { useAddQAMutation } from "../features/qa/qaApi";

function AddQa() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [addQA, { data, isLoading, isError, error, isSuccess }] =
    useAddQAMutation();

  const handleSubmit = () => {
    addQA({ answer, question });
  };

  return (
    <Box w={"md"} mx="auto" boxShadow={"lg"} p={5}>
      <form>
        <FormControl>
          <FormLabel>Question here ..</FormLabel>
          <Input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="First name"
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Answer</FormLabel>
          <Textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Here is a sample placeholder"
          />
        </FormControl>
        <Button
          isLoading={isLoading}
          colorScheme="blue"
          mt={3}
          onClick={handleSubmit}
        >
          Save
        </Button>
      </form>
    </Box>
  );
}

export default AddQa;
