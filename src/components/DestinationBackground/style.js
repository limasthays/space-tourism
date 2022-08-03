import styled from "styled-components";
import mobileBG from "../../assets/destination/background-destination-mobile.jpg";
import desktopBG from "../../assets/destination/background-destination-desktop.jpg";
import tabletBG from "../../assets/destination/background-destination-tablet.jpg";

export const StyledDestinationBackground = styled.div`
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;

  padding: 24px;

  height: 100vh;

  .destination-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;

    margin-top: 24px;
  }

  @media (min-width: 300px) {
    background-image: url(${mobileBG});
  }

  @media (min-width: 768px) {
    background-image: url(${tabletBG});
  }

  @media (min-width: 1000px) {
    background-image: url(${desktopBG});
  }
`;
