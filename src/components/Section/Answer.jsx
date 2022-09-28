import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { anOldHope } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { array } from "../../data/array";
const Answer = () => {
  const { questionId } = useParams();
  const codeString = array.find((dt) => dt.id == questionId)?.answer;

  console.log({ codeString, array, questionId });

  return (
    <Box w={"60%"} mx="auto" boxShadow={"xl"} p={5}>
      Answer - {questionId}
      <SyntaxHighlighter
        showLineNumbers
        wrapLongLines
        language="javascript"
        style={anOldHope}
        customStyle={{ borderRadius: "10px" }}
      >
        {codeString}
      </SyntaxHighlighter>
    </Box>
  );
};

export default Answer;
