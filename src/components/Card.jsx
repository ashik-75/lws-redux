import { Box, Text } from "@chakra-ui/react";

const Card = ({ question, answer }) => {
  return (
    <Box boxShadow={"xl"} p={4}>
      <Text letterSpacing={2} fontWeight="bold" my={2}>
        {question}
      </Text>
      <Text fontSize={"sm"}>{answer}</Text>
    </Box>
  );
};

export default Card;
