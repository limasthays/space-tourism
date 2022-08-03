import { LinksListDesktop } from "../LinksList";
import { StyledMenuDesktop } from "./style";

export const MenuDesktopDiv = ({ menu }) => {
  return (
    <StyledMenuDesktop menu={menu}>
      <LinksListDesktop />
    </StyledMenuDesktop>
  );
};
