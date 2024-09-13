
import HeroSection from "./components/HeroSection";
import HeaderSection from "./components/HeaderSection";
import FooterSection from "./components/FooterSection";
import CreateAcc from "./components/CreateAcc";
import ExploreVar from "./components/ExploreVar";
import Checkout from "./components/Checkout";
import Download from "./components/Download";
import ImageSection from "./components/ImageSection";


export default function Home() {
  return (
    <>
    <HeaderSection />
    <HeroSection />
    <ImageSection/>
    <CreateAcc/>
    <ExploreVar/>
    <Checkout/>
    <Download/>
    <FooterSection/>
    </>
  );
}
