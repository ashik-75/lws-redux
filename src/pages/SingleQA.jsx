import { Box, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { apiSlice } from "../features/api/apiSlice";

const SingleQA = () => {
  const { qaId } = useParams();
  const output = apiSlice.useGetAllQAQuery(undefined, {
    selectFromResult: ({ data }) => ({
      qa: data?.find((dt) => dt?._id === qaId),
    }),
  });

  const { qa } = output;

  console.log({ output });

  return (
    <Box w={"50%"} m={"20px auto"} p={5} boxShadow="lg">
      <Text letterSpacing={2} fontWeight="bold" fontSize={"lg"} my={2}>
        {qa?.question}
      </Text>
      <Text>{qa?.answer}</Text>
    </Box>
  );
};

export default SingleQA;
