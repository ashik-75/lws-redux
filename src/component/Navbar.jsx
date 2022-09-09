import { SmallAddIcon } from "@chakra-ui/icons";
import { Button, Flex, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex p={4} bg="gray.100">
      <Text
        as={Link}
        to="/"
        fontSize={"3xl"}
        fontWeight="bold"
        letterSpacing={"2px"}
      >
        Spectra
      </Text>

      <Spacer />

      <Button
        as={Link}
        to="/videos/add"
        colorScheme={"linkedin"}
        rightIcon={<SmallAddIcon />}
      >
        Add Video
      </Button>
    </Flex>
  );
};

export default Navbar;
