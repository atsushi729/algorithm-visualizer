import styled from "@emotion/styled";
import { useRef } from "react";

const Queue = () => {
  const section1Ref = useRef<HTMLDivElement | null>(null);

  const handleFeatureClick = () => {
    console.log("Feature clicked!");

    if (section1Ref.current) {
      section1Ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <Container>
      <Title>Queue</Title>

      <FeaturesContainer>
        <Feature onClick={handleFeatureClick}>
          <Icon>🔒</Icon>
          <FeatureTitle>Trusted content</FeatureTitle>
          <FeatureDescription>
            Track the life cycle of software artifacts built on trusted content,
            including Docker Official Images, Docker Verified Publishers, and
            Docker-Sponsored Open Source, which form the foundation for reliable
            and secure software applications.
          </FeatureDescription>
        </Feature>

        <Feature>
          <Icon>📊</Icon>
          <FeatureTitle>Centralized view</FeatureTitle>
          <FeatureDescription>
            Operate from one view of centralized insights, for visibility and
            control over all of the information in the software development
            process from the software design phase into production.
          </FeatureDescription>
        </Feature>

        <Feature>
          <Icon>🔄</Icon>
          <FeatureTitle>Recommended workflows</FeatureTitle>
          <FeatureDescription>
            Build faster and more reliable applications through context-aware
            recommendations embedded into common developer workflows, all while
            improving application security posture and ensuring compliance with
            internal security requirements.
          </FeatureDescription>
        </Feature>

        {/* Updated ref here */}
      </FeaturesContainer>

      <div
        ref={section1Ref}
        id="section1"
        style={{ height: "500px", background: "lightgray" }}
      >
        <h1>Section 1</h1>
      </div>
    </Container>
  );
};

//---------------------------------------------------------------------
// Helpers
//---------------------------------------------------------------------
const Container = styled.div({
  maxWidth: "1200px",
  margin: "0 auto",
  fontFamily: "Arial, sans-serif",
});

const FeaturesContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "nowrap",
});

const Title = styled.h1({
  color: "black",
  textAlign: "center", // この行を追加
});

const Feature = styled.div({
  backgroundColor: "#333",
  color: "white",
  padding: "20px",
  margin: "20px 0",
  borderRadius: "5px",
  cursor: "pointer",
  maxWidth: "300px",
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
