import { Box, styled } from "@mui/material";
import Basic from "../../components/code/BasicCode";

// React component
const Algorithm = () => {
  return (
    <Container>
      <Content>
        <Title>Managing Tokens</Title>
        <Description>
          Language models read and write text in chunks called tokens. In
          English, a token can be as short as one character or as long as one
          word. Tokens play a crucial role in understanding and generating text
          by the model.
        </Description>
        <List>
          <li>The total number of tokens affects API call costs.</li>
          <li>Writing more tokens takes more time.</li>
          <li>Total tokens must be below the model’s maximum limit.</li>
        </List>
        <Note>
          Note: Input and output tokens count toward these quantities.
        </Note>
        <Basic codeString={code} language="javascript" />
      </Content>
    </Container>
  );
};

// Define any sizes or colors in a config object, if needed
const sizeConfigs = {
  maxWidth: "800px",
  sidebarWidth: "250px", // example size for the sidebar
};

// Styled components
const Container = styled(Box)({
  display: "flex",
});

const Content = styled(Box)({
  maxWidth: sizeConfigs.maxWidth, // Use from sizeConfigs if needed
  margin: "auto",
  padding: "2rem",
  fontFamily: '"Arial", sans-serif',
});

const Title = styled(Box)({
  fontSize: "24px",
  marginBottom: "1rem",
  component: "h1",
});

const Description = styled(Box)({
  fontSize: "16px",
  marginBottom: "1rem",
  component: "p",
});

const List = styled(Box)({
  listStyle: "inside",
  marginBottom: "1rem",
  component: "ul",
});

const Note = styled(Box)({
  fontSize: "14px",
  fontWeight: "bold",
  component: "p",
});

const code = `import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

  const Component = () => {
    const codeString = '(num) => num + 1';
    return (
      <SyntaxHighlighter language="javascript" style={docco}>
      {codeString}
      </SyntaxHighlighter>
      );
    };`;

export default Algorithm;
