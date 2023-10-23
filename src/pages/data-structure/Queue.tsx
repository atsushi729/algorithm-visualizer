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
          title="Trusted content"
          description="Track the life cycle of software artifacts built on trusted content..."
          onClick={handleFeatureClick("section1")}
        />
        <FeatureItem
          icon="📊"
          title="Centralized view"
          description="Operate from one view of centralized insights..."
          onClick={handleFeatureClick("section2")}
        />
        <FeatureItem
          icon="🔄"
          title="Recommended workflows"
          description="Build faster and more reliable applications through context-aware recommendations..."
          onClick={handleFeatureClick("section3")}
        />
      </FeaturesContainer>

      <Section ref={refs.section1} id="section1">
        Section 1
      </Section>
      <Section ref={refs.section2} id="section2">
        Section 2
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
});

const Section = styled.div({
  height: "500px",
  background: "lightgray",
  fontSize: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Title = styled.h1({
  color: "black",
  textAlign: "center",
  margin: "10%",
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

const FeatureTitle = styled.h3({
  color: "white",
});

const FeatureDescription = styled.p({
  color: "white",
});

export default Queue;
