import styled from "@emotion/styled";
import { useRef } from "react";

const Queue = () => {
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
      <Title>Queue</Title>

      <FeaturesContainer>
        <FeatureItem
          icon="🔒"
          title="What is Queue"
          description="What is a Queue, and how is it used in the real world?"
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
          description="Let's test the queue operations."
          onClick={handleFeatureClick("section3")}
        />
      </FeaturesContainer>

      <Section ref={refs.section1} id="section1">
        <SectionTitle>What is Queue??</SectionTitle>
        <SectionDescription>
          In computer science, a queue is a linear data structure that
          represents a collection with two main operations: Enqueue and Dequeue.
          Importantly, a queue abides by the First-In, First-Out (FIFO)
          principle, which means that the first element added to the queue will
          be the first one to be removed. This behavior can be likened to a
          real-world queue, such as people standing in line at a ticket counter
          where the first person in line gets served first.
        </SectionDescription>
      </Section>

      <Section ref={refs.section2} id="section2">
        <SectionTitle>Operation</SectionTitle>
        <SectionDescription>
          There are two operations in queue
          <ul>
            <li>
              Enqueue: Adds an element to the rear of the queue, ensuring it
              waits its turn to be processed or removed.
            </li>
            <li>
              Dequeue: Removes the front element of the queue based on the FIFO
              principle. If the queue is empty, it usually results in an error
              or a condition signaling no elements.
            </li>
          </ul>
        </SectionDescription>
      </Section>

      <Section ref={refs.section3} id="section3">
        Section 3
      </Section>
    </Container>
  );
};

const FeatureItem = ({ icon, title, description, onClick }: any) => (
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
  fontFamily: "'Archivo Black', sans-serif", // Applied the font here
});

const FeaturesContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "nowrap",
  marginBottom: "20%",
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

export default Queue;