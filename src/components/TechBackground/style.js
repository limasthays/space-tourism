import styled from "styled-components";
import mobile from "../../assets/technology/background-technology-mobile.jpg";
import tablet from "../../assets/technology/background-technology-tablet.jpg";
import desktop from "../../assets/technology/background-technology-desktop.jpg";

export const StyledTechBG = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;

  background-attachment: fixed;
  background-repeat: no-repeat;
  padding: 24px;

  @media (max-width: 425px) {
    background-image: url(${mobile});
  }
  @media (min-width: 426px) {
    background-image: url(${tablet});
  }
  @media (min-width: 1000px) {
    background-image: url(${desktop});
  }
`;
