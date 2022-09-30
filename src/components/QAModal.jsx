import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useAddQAMutation } from "../features/qa/qaApi";

function QAModal() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [addQA, { data, isLoading, isError, error, isSuccess }] =
    useAddQAMutation();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleSubmit = () => {
    addQA({ answer, question });
  };

  useEffect(() => {
    if (isSuccess) {
      onClose();
    }
  }, [isSuccess]);

  return (
    <>
      <Button onClick={onOpen}>Add QA</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Question here ..</FormLabel>
              <Input
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                ref={initialRef}
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
          </ModalBody>

          <ModalFooter>
            <Button
              isLoading={isLoading}
              colorScheme="blue"
              mr={3}
              onClick={handleSubmit}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default QAModal;
