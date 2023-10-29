import styled from "@emotion/styled";
import { useRef } from "react";
import StackCanvas from "../../visualizer/data-structure/StackCanvas";

type FeatureItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: React.MouseEventHandler<HTMLElement>;
};

const Stack = () => {
  const refs = {
    section1: useRef<HTMLDivElement | null>(null),
    section2: useRef<HTMLDivElement | null>(null),
    section3: useRef<HTMLDivElement | null>(null),
  };

  const handleFeatureClick = (section: keyof typeof refs) => () => {
    const ref = refs[section];
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container>
      <Title>Stack</Title>

      <FeaturesContainer>
        <FeatureItem
          icon="🔒"
          title="What is Stack"
          description="What is a stack, and how is it used in the real world?"
          onClick={handleFeatureClick("section1")}
        />
        <FeatureItem
          icon="📊"
          title="Operation"
          description="How to operate this data structure"
          onClick={handleFeatureClick("section2")}
        />
        <FeatureItem
          icon="🔄"
          title="Playground"
          description="Let's test the stack operations."
          onClick={handleFeatureClick("section3")}
        />
      </FeaturesContainer>

      <Section ref={refs.section1} id="section1">
        <SectionTitle>What is Stack??</SectionTitle>
        <SectionDescription>
          A stack is a linear data structure that follows a particular order in
          which operations are performed. The order is based on the Last In
          First Out (LIFO) principle, which means that the last item added to
          the stack is the first item to be removed.
        </SectionDescription>
      </Section>

      <Section ref={refs.section2} id="section2">
        <SectionTitle>Operation</SectionTitle>
        <SectionDescription>
          There are two operations in stack:
          <ul>
            <li>
              Push: Adds an item to the top of the stack. If the stack is full,
              then it is considered an Overflow condition.
            </li>
            <li>
              Pop: Removes the top item from the stack. If the stack is empty,
              then it is said to be an Underflow condition.
            </li>
          </ul>
        </SectionDescription>
      </Section>

      <Section ref={refs.section3} id="section3">
        <StackCanvas />
      </Section>
    </Container>
  );
};

const FeatureItem = ({
  icon,
  title,
  description,
  onClick,
}: FeatureItemProps) => (
  <Feature onClick={onClick}>
    <Icon>{icon}</Icon>
    <FeatureTitle>{title}</FeatureTitle>
    <FeatureDescription>{description}</FeatureDescription>
  </Feature>
);

//---------------------------------------------------------------------
// Helpers
//---------------------------------------------------------------------
const Container = styled.div({
  maxWidth: "1200px",
  margin: "0 auto",
});

const FeaturesContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "nowrap",
  marginBottom: "20%",
  margin: "10%",
});

const Section = styled.div({
  height: "700px",
  background: "lightgray",
  fontSize: "24px",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  margin: "5%",
});

const Feature = styled.div({
  backgroundColor: "#333",
  color: "white",
  padding: "20px",
  margin: "20px 0",
  borderRadius: "5px",
  cursor: "pointer",
  maxWidth: "300px",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-10px)",
  },
});

const Icon = styled.div({
  fontSize: "24px",
});

const Title = styled.h1({
  color: "black",
  textAlign: "center",
  margin: "10%",
});

const SectionTitle = styled.h2({
  color: "black",
});

const FeatureTitle = styled.h3({
  color: "white",
});

const FeatureDescription = styled.p({
  color: "white",
});

const SectionDescription = styled.p({
  margin: "10%",
});

export default Stack;
