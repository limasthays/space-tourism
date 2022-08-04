import { DestinationBackground } from "../../components/DestinationBackground";
import { Header } from "../../components/Header";
import { FirstLine } from "../../components/FirstLine";
import { DestinationContent } from "../../components/DestinationContent";
import { DestinationImage } from "../../components/DestinationPic";
import { DestinationButtons } from "../../components/DestinationButtons";
import { useContext, useEffect } from "react";
import { PageContext } from "../../components/contexts/PageContext";

export function Destination() {
  const { setPage } = useContext(PageContext);
  useEffect(() => {
    setPage("destination");
  });
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
