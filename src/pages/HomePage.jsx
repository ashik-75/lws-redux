import { Alert, Spinner, Text } from "@chakra-ui/react";
import Cards from "../component/Cards";
import { useGetVideosQuery } from "../features/apiSlice/apiSlice";

const HomePage = () => {
  const { isLoading, isError, data, error, isSuccess } = useGetVideosQuery();

  console.log({ isLoading, isError, data, error, isSuccess });
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <Alert>{error}</Alert>
      ) : data.length === 0 ? (
        <Text>Empty</Text>
      ) : (
        <Cards videos={data} />
      )}
    </div>
  );
};

export default HomePage;
