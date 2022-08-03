import { StyledHeader } from "./style";
import LogoIcon from "../../assets/shared/logo.svg";
import MenuIcon from "../../assets/shared/icon-hamburger.svg";
import { Icon } from "../Icons";
import { Link } from "react-router-dom";
import { MenuDesktopDiv } from "../Menu-Desktop";
import { useState } from "react";
import { MenuMobile } from "../Menu-Mobile";

export const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <StyledHeader>
      <Link to="/">
        <Icon src={LogoIcon} />
      </Link>
      <Icon
        src={MenuIcon}
        onClick={() => setMenu(true)}
        conditional={true}
        menu={menu}
        className="mobile-menu-item"
      />

      <MenuDesktopDiv menu={menu} />

      <MenuMobile menu={menu} setMenu={setMenu} />
    </StyledHeader>
  );
};
