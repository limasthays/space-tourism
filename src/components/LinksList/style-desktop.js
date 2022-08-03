import styled from "styled-components";

export const LinksListDesktopStyled = styled.li`
  list-style: none;

  a {
    color: white;
    text-transform: uppercase;
    text-decoration: none;
  }

  span {
    font-family: "Barlow Condensed";
    font-size: 14px;
    line-height: 17px;
    font-weight: 600;
    letter-spacing: 2.3625px;
  }

  span + span {
    font-weight: 400;
    margin-left: 5px;
  }
`;
