import React from "react";
import { Box } from "@chakra-ui/react";
import { CodeBlock as ImportedCodeBlock, vs2015 } from "react-code-blocks";

const styles = {
  backgroundColor: "rgb(30, 30, 30)",
};

const CodeBlock = ({ text, language }) => {
  return (
    <Box fontFamily="mono">
      <ImportedCodeBlock
        customStyle={styles}
        text={text}
        language={language}
        theme={vs2015}
        showLineNumbers
        wrapLines
      />
    </Box>
  );
};

export default CodeBlock;
