import styled, { css } from "styled-components";
import DesktopHomeBG from "../../assets/home/background-home-desktop.jpg";
import TabletHomeBG from "../../assets/home/background-home-tablet.jpg";
import MobileHomeBG from "../../assets/home/background-home-mobile.jpg";

const breakpoints = [
  {
    name: "mobile",
    break: 200,
    background: `${MobileHomeBG}`,
    height: "100vh",
  },
  {
    name: "tablet",
    break: 768,
    background: `${TabletHomeBG}`,
    height: "100vh",
  },
  {
    name: "desktop",
    break: 1000,
    background: `${DesktopHomeBG}`,
    height: "100vh",
  },
];

export const StyledHomeBackground = styled.div`
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  padding: 24px;
  ${breakpoints.map(
    (breakpoint) => css`
      @media (min-width: ${breakpoint.break}px) {
        background-image: url(${breakpoint.background});
        height: ${breakpoint.height};
      }
    `
  )}
`;
