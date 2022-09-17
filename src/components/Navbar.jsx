import { Box, Button, Flex, Spacer, Stack } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "../features/auth/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userLoggedOut());
    localStorage.removeItem("auth");
  };
  return (
    <Flex padding={3} alignItems="center" bg="gray.100">
      <Box>Navbar</Box>
      <Spacer />
      <Stack>
        <Button onClick={handleLogout} colorScheme={"pink"}>
          Logout
        </Button>
      </Stack>
    </Flex>
  );
};

export default Navbar;
