import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import CanvasComponent from "../../visualizer/data-structure/stack";

const Stack = () => {
  return (
    <>
      {/* Title */}
      <Title variant="h3" gutterBottom>
        Stack
      </Title>
      {/*  Card components */}

      {/* Text parts */}
      <div>
        In computer science, a stack is an abstract data type that serves as a
        collection of elements, with two main operations.
      </div>

      <div>
        The order in which an element added to or removed from a stack is
        described as last in, first out, referred to by the acronym LIFO.[nb 1]
        As with a stack of physical objects, this structure makes it easy to
        take an item off the top of the stack, but accessing a datum deeper in
        the stack may require taking off multiple other items first.
      </div>
      <CanvasComponent />
    </>
  );
};

//---------------------------------------------------------------------
// Helpers
//---------------------------------------------------------------------
const Title = styled(Typography)({
  display: "flex",
  justifyContent: "center",
  marginTop: "5%",
  fontWeight: "bold",
});

export default Stack;
