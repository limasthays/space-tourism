import { useContext } from "react";
import { Link } from "react-router-dom";
import { PageContext } from "../contexts/PageContext";
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

//essa daqui vai ser a mobile, a desktop vai ser outra
export const LinksListMobile = () => {
  const { setPage } = useContext(PageContext);
  return (
    <ul>
      {items.map((item) => (
        <LinksListMobileStyled key={item.page}>
          <Link to={item.link} onClick={() => setPage(item.page)}>
            <span>{item.number}</span>
            <span>{item.page}</span>
          </Link>
        </LinksListMobileStyled>
      ))}
    </ul>
  );
};

export const LinksListDesktop = () => {
  const { setPage } = useContext(PageContext);
  return (
    <ul className="ul-desktop">
      {items.map((item) => (
        <LinksListDesktopStyled key={item.page}>
          <Link to={item.link} onClick={() => setPage(item.page)}>
            <span>{item.number}</span>
            <span>{item.page}</span>
          </Link>
        </LinksListDesktopStyled>
      ))}
    </ul>
  );
};
