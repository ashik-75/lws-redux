import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Spacer,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLoggedOut } from "../features/auth/authSlice";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { colorMode, toggleColorMode } = useColorMode();

  const handleLogout = () => {
    dispatch(userLoggedOut());
    localStorage.removeItem("auth");
  };

  return (
    <Flex padding={3} alignItems="center">
      <Text
        as={Link}
        to="/"
        fontWeight={"bold"}
        fontSize="2xl"
        letterSpacing={2}
      >
        Navbar
      </Text>
      <Spacer />
      <Stack direction={"row"}>
        <Button as={Link} to="/users">
          Users
        </Button>
        {auth ? (
          <Button onClick={handleLogout} colorScheme={"pink"}>
            Logout
          </Button>
        ) : (
          <ButtonGroup>
            <Button onClick={() => navigate("/login")}>Login</Button>
            <Button onClick={() => navigate("/register")}>Register</Button>
          </ButtonGroup>
        )}

        <IconButton
          onClick={toggleColorMode}
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        />
      </Stack>
    </Flex>
  );
};

export default Navbar;
