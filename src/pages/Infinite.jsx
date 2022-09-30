import { Box, Spinner, VStack } from "@chakra-ui/react";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const Infinite = () => {
  const [items, setItems] = useState([...Array(20).keys()]);
  const [hasMore, setHasMore] = useState(true);

  const addMore = () => {
    if (items.length >= 100) {
      setHasMore(false);
      return;
    }

    console.log("add more func", { hasMore });

    setTimeout(() => {
      setItems((prev) => [...prev, ...Array(20).keys()]);
    }, 2000);
  };
  return (
    <Box>
      <Box>React Infinite Scroll</Box>

      <InfiniteScroll
        dataLength={items.length}
        next={addMore}
        loader={
          <Box textAlign={"center"} my={5}>
            <Spinner />
          </Box>
        }
        hasMore={hasMore}
        endMessage={
          !hasMore && (
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          )
        }
      >
        <VStack spacing={2}>
          {items.map((item, key) => (
            <Box
              key={key}
              boxShadow={"lg"}
              border="2px"
              width={"50%"}
              borderColor="gray.500"
              padding={2}
              textAlign="center"
            >
              {key + 1}
            </Box>
          ))}
        </VStack>
      </InfiniteScroll>
    </Box>
  );
};

export default Infinite;
