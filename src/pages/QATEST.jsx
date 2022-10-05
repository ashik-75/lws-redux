import { Avatar, Box, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import fakeList from "../data/faker";

const Card = ({ post }) => {
  const { image, title, description, firstName, avatar } = post || {};
  return (
    <Box p={5} boxShadow="lg" borderRadius={"xl"}>
      <Image src={image} borderRadius="5px" />
      <Text my={2} fontWeight="bold" fontSize={"lg"}>
        {title}
      </Text>
      <Text>{description}</Text>

      <Stack direction={"row"} spacing={2} my={4} alignItems="center">
        <Avatar src={avatar} />
        <Text fontWeight={"bold"}>{firstName}</Text>
      </Stack>
    </Box>
  );
};

const QATEST = () => {
  const randomName = faker.name.fullName();
  const list = fakeList;

  return (
    <Box>
      <SimpleGrid columns={4} gap={10}>
        {list.map((post) => (
          <Card post={post} key={post._id} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default QATEST;
