import styled from "styled-components";
import mobile from "../../assets/technology/background-technology-mobile.jpg";
import tablet from "../../assets/technology/background-technology-tablet.jpg";
import desktop from "../../assets/technology/background-technology-desktop.jpg";

export const StyledTechBG = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;

  background-image: url(${mobile});
  background-attachment: fixed;
  padding: 24px;

  .tech-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 32px;

    width: 100%;
  }

  @media (min-width: 426px) {
    background-image: url(${tablet});
  }
  @media (min-width: 1000px) {
    background-image: url(${desktop});

    .tech-container {
      flex-direction: row;
      justify-content: flex-end;
      column-gap: 7%;
    }
  }
`;
