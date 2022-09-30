import { Alert, Box, SimpleGrid, Spinner } from "@chakra-ui/react";
import Card from "../components/Card";
import QAModal from "../components/QAModal";
import { useGetAllQAQuery } from "../features/qa/qaApi";

const Qapage = () => {
  const { data, isLoading, isError, isSuccess, error } = useGetAllQAQuery();
  return (
    <Box p={5}>
      <Box my={4}>
        <QAModal />
      </Box>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <Alert status="error">{error?.message}</Alert>
      ) : (
        <SimpleGrid columns={4} spacing={10}>
          {data?.map((dt) => (
            <Card
              key={dt?._id || Math.random() * 1000}
              answer={dt?.answer}
              question={dt?.question}
            />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

export default Qapage;
