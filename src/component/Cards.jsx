import { SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";

const Cards = ({ videos }) => {
  return (
    <SimpleGrid
      columns={{
        base: 1,
        md: 2,
        lg: 4,
      }}
      spacing={5}
      p={5}
    >
      {videos.map((video) => (
        <Card key={video.id} video={video} />
      ))}
    </SimpleGrid>
  );
};

export default Cards;
