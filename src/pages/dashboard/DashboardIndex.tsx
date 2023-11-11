import React from "react";
import { Box, styled } from "@mui/material";

// React component
const Algorithm = () => {
  // Example code string
  const codeString = `from openai import OpenAI
client = OpenAI()
response = client.completions.create(
  model="gpt-3.5-turbo-instruct",
  prompt="Write a tagline for an ice cream shop."
)`.trim();

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
        <CodeBlock component="pre">
          <code>{codeString}</code>
        </CodeBlock>
        <code>{"body { color: blue; }"}</code>
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

// React component
const CodeBlock = styled(Box)({
  background: "#000", // Black background
  color: "#fff", // White text color for contrast
  fontFamily: "monospace", // Monospace font for code
  padding: "1em",
  borderRadius: "5px",
  overflowX: "auto", // Allows scrolling on small screens
});

export default Algorithm;
