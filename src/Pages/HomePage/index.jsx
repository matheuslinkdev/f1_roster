import HomeContent from "../../Components/HomeContent";
import NavBar from "../../Components/NavBar";
import Footer from './../../Components/Footer/index';

function HomePage() {
  return (
    <>
      <main>
        <NavBar />
        <HomeContent />
        <Footer/>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
