import styled from "styled-components";

export const LinksListMobileStyled = styled.li`
  list-style: none;

  a {
    text-decoration: none;
    color: white;
    text-transform: uppercase;
  }

  span {
    font-family: "Barlow Condensed", sans-serif;
    font-weight: 600;
    color: #ffffff;

    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.7px;
  }

  span + span {
    font-weight: 100;
  }
`;

//criar aqui os estilos para desktop e tablet
