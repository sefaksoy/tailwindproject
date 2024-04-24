import TopHeader from "./TopHeader";
import HeroSection from "./HeroSection";
import MoviesSection from "./MoviesSection";
import MiddleSection from "./MiddleSection";
import PostSection from "./PostSection";
import FooterPage from "./FooterPage";

export default function Home() {
  return (
    <>
      <TopHeader></TopHeader>
      <HeroSection></HeroSection>
      <MoviesSection></MoviesSection>
      <MiddleSection></MiddleSection>
      <PostSection></PostSection>
      <FooterPage></FooterPage>
    </>
  );
}
