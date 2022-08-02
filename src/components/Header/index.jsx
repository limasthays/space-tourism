import { StyledHeader } from "./style";
import LogoIcon from "../../assets/shared/logo.svg";
import MenuIcon from "../../assets/shared/icon-hamburger.svg";
import { Icon } from "../Icons";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <Icon src={LogoIcon} />
      </Link>
      <Icon src={MenuIcon} />
    </StyledHeader>
  );
};
