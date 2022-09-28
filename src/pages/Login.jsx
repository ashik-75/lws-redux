import {
  Alert,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../features/auth/authApi";

const Login = () => {
  const navigate = useNavigate();
  const [addLogin, { isLoading, isError, error, isSuccess, data }] =
    useLoginMutation();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addLogin(loginInfo);
  };

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
    }
  }, [isSuccess]);

  return (
    <Box>
      <Text
        fontWeight={"bold"}
        color="gray.500"
        fontSize={"2xl"}
        fontFamily="sans-serif"
        textAlign={"center"}
        mt={10}
      >
        Login Form
      </Text>

      <Box w="40%" boxShadow={"xl"} p={5} m={"100px auto"}>
        <form onSubmit={handleSubmit}>
          <VStack spacing={2}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input type={"email"} name="email" onChange={handleChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
                type={"password"}
                name="password"
                onChange={handleChange}
              />
            </FormControl>
          </VStack>
          <Button
            isLoading={isLoading}
            loadingText="Processing..."
            mt={5}
            colorScheme="teal"
            type="submit"
          >
            Login
          </Button>
        </form>

        {isError && (
          <Alert status="warning" backgroundColor={"red"} my={4}>
            {error?.data?.message}
          </Alert>
        )}
      </Box>
    </Box>
  );
};

export default Login;
