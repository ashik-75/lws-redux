import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box p={4} bg="gray.100">
      <Text
        as={Link}
        to="/"
        fontSize={"3xl"}
        fontWeight="bold"
        letterSpacing={"2px"}
      >
        Spectra
      </Text>
    </Box>
  );
};

export default Navbar;
