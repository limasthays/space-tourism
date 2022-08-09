import { StyledCrewBackground } from "../../components/CrewBackground/style";
import { Header } from "../../components/Header";
import { CrewButtons } from "../../components/CrewButtons";
import { CrewImage } from "../../components/CrewImage";
import { FirstLine } from "../../components/FirstLine";
import { useContext, useEffect } from "react";
import { PageContext } from "../../components/contexts/PageContext";
import { CrewContent } from "../../components/CrewContent";

export function Crew() {
  const { setPage } = useContext(PageContext);

  useEffect(() => {
    setPage("crew");
  });
  return (
    <StyledCrewBackground>
      <Header />
      <div className="crew-container">
        <FirstLine />
        <CrewImage />
        <CrewButtons />
        <CrewContent />
      </div>
    </StyledCrewBackground>
  );
}
