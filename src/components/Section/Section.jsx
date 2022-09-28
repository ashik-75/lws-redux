import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import Question from "./Question";

const Section = ({ title, questions }) => {
  return (
    <Box w={"75%"} mx="auto">
      <Text fontWeight={"bold"} fontSize="xl" letterSpacing={2} mb={10}>
        {title}
      </Text>
      <SimpleGrid columns={2} spacing={10}>
        {questions?.length > 0 &&
          questions?.map((question) => (
            <Question id={question?.id} title={question?.question} />
          ))}
      </SimpleGrid>
    </Box>
  );
};

export default Section;
