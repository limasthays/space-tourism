import styled from "styled-components";
import mobileBG from "../../assets/crew/background-crew-mobile.jpg";
import tabletBG from "../../assets/crew/background-crew-tablet.jpg";
import desktopBG from "../../assets/crew/background-crew-desktop.jpg";

export const StyledCrewBackground = styled.div`
  display: flex;
  flex-direction: column;

  background-image: url(${mobileBG});
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  padding: 24px 24px 0px 24px;

  .crew-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 32px;
  }
  @media (min-width: 768px) {
    background-image: url(${tabletBG});
  }
  @media (min-width: 1000px) {
    background-image: url(${desktopBG});

    .crew-container {
      flex-direction: row;
      justify-content: center;
    }
  }
`;
