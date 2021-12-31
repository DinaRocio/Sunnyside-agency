import Header from "../../components/Header";
import Services from "../../components/Services";
import Testimonies from "../../components/Testimonies";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Services />
      <Testimonies />
      {/* <Footer /> */}
      <div>
        <div className="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge">
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/DinaRocio">Dina Rocio</a>.
        </div>
      </div>
    </>
  );
}
