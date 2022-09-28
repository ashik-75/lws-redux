import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Question = ({ title, id }) => {
  return (
    <Box
      as={Link}
      to={`/answer/${id}`}
      boxShadow={"xl"}
      padding={4}
      fontWeight="bold"
      fontSize={"xl"}
    >
      {title}
    </Box>
  );
};

export default Question;
