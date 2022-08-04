import { StyledCrewBackground } from "../../components/CrewBackground/style";
import { Header } from "../../components/Header";

import { CrewButtons } from "../../components/CrewButtons";
import { CrewImage } from "../../components/CrewImage";
import { FirstLine } from "../../components/FirstLine";

export function Crew() {
  return (
    <StyledCrewBackground>
      <Header />
      <FirstLine />
      <div className="crew-container">
        <CrewImage />
        <CrewButtons />
      </div>
    </StyledCrewBackground>
  );
}
