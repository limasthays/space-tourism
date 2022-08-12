import { useContext, useEffect } from "react";
import { PageContext } from "../../components/contexts/PageContext";
import { FirstLine } from "../../components/FirstLine";
import { Header } from "../../components/Header";
import { StyledTechBG } from "../../components/TechBackground/style";
import { TechButtons } from "../../components/TechButtons";
import { TechContent } from "../../components/TechContent";
import { TechImage } from "../../components/TechImage";

export const Technology = () => {
  const { setPage } = useContext(PageContext);
  useEffect(() => {
    setPage("technology");
  });

  return (
    <StyledTechBG>
      <Header />
      <FirstLine />
      <div className="tech-container">
        <TechImage />
        <TechButtons />
        <TechContent />
      </div>
    </StyledTechBG>
  );
};
