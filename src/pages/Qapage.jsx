import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import {
  Alert,
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Input,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import { useCallback, useEffect, useMemo, useState } from "react";
import AddQa from "../components/AddQa";
import Card from "../components/Card";
import { useGetAllQAQuery, usePrefetch } from "../features/qa/qaApi";

const useDebounce = (info, time) => {
  const [output, setOutput] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOutput(info);
    }, time);

    return () => {
      clearTimeout(timeout);
    };
  }, [info, time]);

  return output;
};

const Qapage = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const output = useDebounce(search, 2000);
  console.log({ output });
  const info = useMemo(() => {
    return { page, search: output };
  }, [page, search]);
  const { data, isLoading, isError, isSuccess, error, isFetching } =
    useGetAllQAQuery({ page, search: output });
  const prefetch = usePrefetch("getAllQA");

  const prefetchNext = useCallback(() => {
    prefetch({ page: page + 1, search });
  }, [page]);

  const { data: qaList, totalPage, totalDocument } = data || {};

  useEffect(() => {
    if (page !== totalPage) {
      prefetchNext();
    }
  }, [page, totalPage]);

  const handleSearch = (e) => {
    e.preventDefault();
    prefetch({ page: 1, search });
  };

  return (
    <Box p={5}>
      <Box my={4}>
        <AddQa />
      </Box>
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <Alert status="error">{error?.message}</Alert>
      ) : (
        <Box>
          <Box w="md" m={"20px auto"}>
            <form onSubmit={handleSearch}>
              <Input
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setPage(1);
                }}
              />
            </form>
          </Box>
          <SimpleGrid columns={4} spacing={10}>
            {qaList?.map((dt) => (
              <Card
                _id={dt?._id}
                key={dt?._id || Math.random() * 1000}
                answer={dt?.answer}
                question={dt?.question}
              />
            ))}
          </SimpleGrid>

          <ButtonGroup my={5}>
            <IconButton
              icon={isFetching ? <Spinner /> : <ArrowLeftIcon />}
              onClick={() => setPage((prev) => prev - 1)}
              disabled={page === 1}
            />
            <IconButton
              icon={isFetching ? <Spinner /> : <ArrowRightIcon />}
              onClick={() => {
                setPage((prev) => prev + 1);
              }}
              disabled={page === totalPage}
              onMouseEnter={prefetchNext}
            />
            <Button letterSpacing={2}>{`${page}/${totalPage}`}</Button>
            <Button letterSpacing={2} onClick={() => prefetch(10)}>
              Prefetch
            </Button>
          </ButtonGroup>
        </Box>
      )}
    </Box>
  );
};

export default Qapage;
