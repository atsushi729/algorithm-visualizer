import styled from "@emotion/styled";
import { useRef } from "react";
import BubbleSortCanvas from "../../visualizer/sort/BubbleSort";

type FeatureItemProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  onClick: React.MouseEventHandler<HTMLElement>;
};

const BubbleSort = () => {
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
      <Title>BubbleSort</Title>

      <FeaturesContainer>
        <FeatureItem
          icon="🔒"
          title="What is bubble sort"
          description="What is a bubble sort, and how is it used in the real world?"
          onClick={handleFeatureClick("section1")}
        />
        <FeatureItem
          icon="📊"
          title="Time complexity"
          description="Time complexity of Bubble sort"
          onClick={handleFeatureClick("section2")}
        />
        <FeatureItem
          icon="🔄"
          title="Playground"
          description="Let's test the bubble sort operations."
          onClick={handleFeatureClick("section3")}
        />
      </FeaturesContainer>

      <Section ref={refs.section1} id="section1">
        <SectionTitle>What is Bubble sort??</SectionTitle>
        <SectionDescription>
          Bubble Sort is a simple sorting algorithm that repeatedly steps
          through the list to be sorted, compares each pair of adjacent items
          and swaps them if they are in the wrong order.
        </SectionDescription>
      </Section>

      <Section ref={refs.section2} id="section2">
        <SectionTitle>Time complexity</SectionTitle>
        <SectionDescription>
          <ul>
            <li>
              <strong>Best Case (Optimized Version):</strong>
              <ul>
                <li>
                  <strong>Time Complexity:</strong> O(n)
                </li>
                <li>
                  <strong>Condition:</strong> This occurs when the array is
                  already sorted. An optimized version of Bubble Sort can detect
                  this by checking if any swaps were made in the first pass. If
                  no swaps occur, the algorithm can terminate early, leading to
                  a linear time complexity.
                </li>
              </ul>
            </li>
            <li>
              <strong>Average Case:</strong>
              <ul>
                <li>
                  <strong>Time Complexity:</strong> O(n<sup>2</sup>)
                </li>
                <li>
                  <strong>Condition:</strong> In an average scenario, where the
                  elements of the array are in a random order, Bubble Sort will
                  need to perform a significant number of comparisons and swaps,
                  leading to a quadratic time complexity.
                </li>
              </ul>
            </li>
            <li>
              <strong>Worst Case:</strong>
              <ul>
                <li>
                  <strong>Time Complexity:</strong> O(n<sup>2</sup>)
                </li>
                <li>
                  <strong>Condition:</strong> This occurs when the array is
                  sorted in reverse order. In such a case, each element needs to
                  be compared with every other element, resulting in the maximum
                  number of swaps and comparisons.
                </li>
              </ul>
            </li>
          </ul>
        </SectionDescription>
      </Section>

      <Section ref={refs.section3} id="section3">
        <SectionTitle>Playground</SectionTitle>
        <SectionDescription>
          You can click the button to add a new node and move it wherever you'd
          like. <BubbleSortCanvas />
        </SectionDescription>
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
  fontSize: "24px",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
  margin: "25% 0 ",
});

const Feature = styled.div({
  backgroundColor: "#333",
  color: "white",
  padding: "20px",
  // margin: "20px 0",
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

export default BubbleSort;
