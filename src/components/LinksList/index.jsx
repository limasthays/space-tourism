import { Link } from "react-router-dom";
import { LinksListDesktopStyled } from "./style-desktop";
import { LinksListMobileStyled } from "./styles";

const items = [
  {
    number: "00",
    page: "home",
    link: "/",
  },
  {
    number: "01",
    page: "destination",
    link: "/destination",
  },
  {
    number: "02",
    page: "crew",
    link: "/crew",
  },
  {
    number: "03",
    page: "technology",
    link: "/technology",
  },
];

export const LinksListMobile = () => {
  return (
    <ul>
      {items.map((item) => (
        <LinksListMobileStyled key={item.page}>
          <Link to={item.link}>
            <span>{item.number}</span>
            <span>{item.page}</span>
          </Link>
        </LinksListMobileStyled>
      ))}
    </ul>
  );
};

export const LinksListDesktop = () => {
  return (
    <ul className="ul-desktop">
      {items.map((item) => (
        <LinksListDesktopStyled key={item.page}>
          <Link to={item.link}>
            <span>{item.number}</span>
            <span>{item.page}</span>
          </Link>
        </LinksListDesktopStyled>
      ))}
    </ul>
  );
};
