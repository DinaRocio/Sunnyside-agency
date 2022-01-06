import Header from "../../components/Header";
import Services from "../../components/Services";
import Testimonies from "../../components/Testimonies";
import PicturesCarrousel from "../../components/PicturesCarrousel";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Services />
      <Testimonies />
      <PicturesCarrousel />
      <Footer />
    </>
  );
}
