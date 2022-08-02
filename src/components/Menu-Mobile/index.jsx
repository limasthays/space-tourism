import { Icon } from "../Icons";
import { StyledMenuMobile } from "./style";
import close from "../../assets/shared/icon-close.svg";

export const MenuMobile = ({ menu, setMenu }) => {
  return (
    <StyledMenuMobile visible={menu} className="menu-mobile">
      <Icon src={close} onClick={() => setMenu(false)} />
    </StyledMenuMobile>
  );
};
