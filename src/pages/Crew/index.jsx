import { StyledCrewBackground } from "../../components/CrewBackground/style";
import { Header } from "../../components/Header";

export function Crew() {
  return (
    <StyledCrewBackground>
      <Header />

      <div className="crew-container"></div>
    </StyledCrewBackground>
  );
}
