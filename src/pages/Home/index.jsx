import { HomeBackground } from "../../components/HomeBackground";
import { Header } from "../../components/Header";
import { IntroContent } from "../../components/IntroContent";
/**
 * 
 const [menu, setMenu] = useState(false);
 * 
 */

export function Home() {
  return (
    <HomeBackground>
      <Header />
      <IntroContent />
    </HomeBackground>
  );
}
