import { Box } from "@chakra-ui/react";
import Section from "../components/Section/Section";
import { array } from "../data/array";

const HomePage = () => {
  return (
    <Box>
      <Section title={"Array"} questions={array} />
    </Box>
  );
};

export default HomePage;
