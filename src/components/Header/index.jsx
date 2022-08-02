import { StyledHeader } from "./style";
import LogoIcon from "../../assets/shared/logo.svg";
import MenuIcon from "../../assets/shared/icon-hamburger.svg";
import { Icon } from "../Icons";
import { Link } from "react-router-dom";

export const Header = ({ setMenu, menu }) => {
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
      />
    </StyledHeader>
  );
};
