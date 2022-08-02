import { HomeBackground } from "../../components/HomeBackground";
import { Header } from "../../components/Header";
import { IntroContent } from "../../components/IntroContent";
import { MenuMobile } from "../../components/Menu-Mobile";
import { useState } from "react";

export function Home() {
  const [menu, setMenu] = useState(false);
  return (
    <HomeBackground>
      <MenuMobile menu={menu} setMenu={setMenu} />
      <Header setMenu={setMenu} menu={menu} />
      <IntroContent />
    </HomeBackground>
  );
}
