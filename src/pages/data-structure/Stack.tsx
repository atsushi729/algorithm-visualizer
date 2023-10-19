import styled from "@emotion/styled";
import CanvasComponent from "../../visualizer/data-structure/stack";

const Stack = () => {
  return (
    <Container>
      <Title>Stack</Title>
      <Subtitle>
        FILO (first in last out) data structure
      </Subtitle>

      <Feature>
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
      {/* data structure visualizer */}
      <CanvasComponent />
    </Container>
  );
};

//---------------------------------------------------------------------
// Helpers
//---------------------------------------------------------------------
const Container = styled.div({
  maxWidth: "800px",
  margin: "0 auto",
  fontFamily: "Arial, sans-serif",
});

const Title = styled.h1({
  color: "black",
});

const Subtitle = styled.h2({
  color: "black",
});

const Feature = styled.div({
  backgroundColor: "#333",
  color: "white",
  padding: "20px",
  margin: "20px 0",
  borderRadius: "5px",
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

export default Stack;
