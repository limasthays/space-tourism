import styled, { css } from "styled-components";
import DesktopHomeBG from "../../assets/home/background-home-desktop.jpg";
import TabletHomeBG from "../../assets/home/background-home-tablet.jpg";
import MobileHomeBG from "../../assets/home/background-home-mobile.jpg";

const breakpoints = [
  {
    name: "mobile",
    break: 300,
    background: `${MobileHomeBG}`,
  },
  {
    name: "tablet",
    break: 768,
    background: `${TabletHomeBG}`,
  },
  {
    name: "desktop",
    break: 1000,
    background: `${DesktopHomeBG}`,
  },
];

export const StyledHomeBackground = styled.div`
  background-size: cover;
  background-attachment: fixed;
  height: 100%;
  padding: 24px;
  ${breakpoints.map(
    (breakpoint) => css`
      @media (min-width: ${breakpoint.break}px) {
        background: url(${breakpoint.background});
      }
    `
  )}
`;
