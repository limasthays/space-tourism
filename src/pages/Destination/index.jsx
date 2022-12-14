import { DestinationBackground } from "../../components/DestinationBackground";
import { Header } from "../../components/Header";
import { FirstLine } from "../../components/FirstLine";
import { DestinationContent } from "../../components/DestinationContent";
import { DestinationImage } from "../../components/DestinationPic";
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
      <FirstLine />
      <div className="destination-container">
        <div className="dest-content">
          <DestinationImage />
          <DestinationContent />
        </div>
      </div>
    </DestinationBackground>
  );
}
