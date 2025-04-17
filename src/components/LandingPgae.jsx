import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer";
const LandingPage = () => {
  return (
    <div className="landingDiv">
      <Navbar />
      <main  className=" overflow-auto flex-grow ">
      <Body />
      <Footer />
      </main>
    </div>
  );
};
export default LandingPage;
