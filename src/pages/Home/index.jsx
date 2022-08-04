import { HomeBackground } from "../../components/HomeBackground";
import { Header } from "../../components/Header";
import { IntroContent } from "../../components/IntroContent";
import { useContext, useEffect } from "react";
import { PageContext } from "../../components/contexts/PageContext";

export function Home() {
  const { setPage } = useContext(PageContext);
  useEffect(() => {
    setPage("home");
  });
  return (
    <HomeBackground>
      <Header />
      <IntroContent />
    </HomeBackground>
  );
}
