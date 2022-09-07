import {
  Avatar,
  Box,
  Image,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function RelatedVideo({ video }) {
  const {
    thumbnail,
    duration,
    title,
    author,
    avatar,
    description,
    id,
    date,
    views,
  } = video;
  return (
    <Box
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"md"}
      p={6}
      overflow={"hidden"}
    >
      <Box
        as={Link}
        to={`/video/${id}`}
        h={"210px"}
        bg={"gray.100"}
        overflow="hidden"
        mb={5}
      >
        <Image src={thumbnail} layout={"fill"} />
      </Box>

      <Stack mt={6} direction={"row"} spacing={4} align={"center"}>
        <Avatar src={avatar} alt={"Author"} />
        <Stack direction={"column"} spacing={0} fontSize={"sm"}>
          <Text fontWeight={600}>{author}</Text>
          <Text color={"gray.500"}>
            {date} . {views} views
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
}
