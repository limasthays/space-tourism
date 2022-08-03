import { DestinationBackground } from "../../components/DestinationBackground";
import { Header } from "../../components/Header";
import { FirstLine } from "../../components/FirstLine";
import { DestinationContent } from "../../components/DestinationContent";

export function Destination() {
  return (
    <DestinationBackground>
      <Header />
      <div className="destination-container">
        <FirstLine />
        <DestinationContent />
      </div>
    </DestinationBackground>
  );
}
