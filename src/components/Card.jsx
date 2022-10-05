import { DeleteIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, ButtonGroup, IconButton, Text } from "@chakra-ui/react";
import { useDeleteQaMutation } from "../features/qa/qaApi";

const Card = ({ question, answer, _id }) => {
  const [deleteQa, { isLoading, isSuccess, isError, error }] =
    useDeleteQaMutation();
  return (
    <Box boxShadow={"xl"} p={4}>
      <Text letterSpacing={2} fontWeight="bold" my={2}>
        {question}
      </Text>
      <Text fontSize={"sm"}>{answer}</Text>
      <ButtonGroup my={4}>
        <IconButton icon={<DeleteIcon />} onClick={() => deleteQa(_id)} />
        <IconButton icon={<ExternalLinkIcon />} />
      </ButtonGroup>
    </Box>
  );
};

export default Card;
