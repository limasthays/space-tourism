import { DestinationBackground } from "../../components/DestinationBackground";
import { Header } from "../../components/Header";
import { FirstLine } from "../../components/FirstLine";
import { DestinationContent } from "../../components/DestinationContent";
import { DestinationImage } from "../../components/DestinationPic";
import { DestinationButtons } from "../../components/DestinationButtons";

export function Destination() {
  return (
    <DestinationBackground>
      <Header />
      <div className="destination-container">
        <FirstLine />
        <DestinationImage />
        <DestinationButtons />
        <DestinationContent />
      </div>
    </DestinationBackground>
  );
}
