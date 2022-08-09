import styled, { css } from "styled-components";
import mobileBG from "../../assets/crew/background-crew-mobile.jpg";
import tabletBG from "../../assets/crew/background-crew-tablet.jpg";
import desktopBG from "../../assets/crew/background-crew-desktop.jpg";

const breakpoints = [
  {
    name: "mobile",
    break: 200,
    background: `${mobileBG}`,
    height: "100%",
  },
  {
    name: "tablet",
    break: 768,
    background: `${tabletBG}`,
    height: "100vh",
  },
  {
    name: "desktop",
    break: 1000,
    background: `${desktopBG}`,
    height: "100vh",
  },
];

export const StyledCrewBackground = styled.div`
  display: flex;
  flex-direction: column;

  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  padding: 24px;

  .crew-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 32px;

    margin-top: 24px;
  }

  ${breakpoints.map(
    (breakpoint) => css`
      @media (min-width: ${breakpoint.break}px) {
        background-image: url(${breakpoint.background});
        height: 100%;
      }
    `
  )}
`;
