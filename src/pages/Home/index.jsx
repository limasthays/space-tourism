import { HomeBackground } from "../../components/HomeBackground";
import { Header } from "../../components/Header";
import { IntroContent } from "../../components/IntroContent";

export function Home() {
  return (
    <>
      <HomeBackground>
        <Header />
        <IntroContent />
      </HomeBackground>
    </>
  );
}
