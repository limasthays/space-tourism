import { StyledHeader } from "./style";
import LogoIcon from "../../assets/shared/logo.svg";
import MenuIcon from "../../assets/shared/icon-hamburger.svg";
import { Icon } from "../Icons";

export const Header = () => {
  return (
    <StyledHeader>
      <Icon src={LogoIcon} />
      <Icon src={MenuIcon} />
    </StyledHeader>
  );
};
