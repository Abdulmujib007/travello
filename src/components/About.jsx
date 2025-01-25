import NavBar2 from "./NavBar2";
import Footer from "./Footer";

const About = () => {
    return (
      <div className="landingDiv">
        <NavBar2 />
        <main className=" overflow-auto flex-grow ">
            <h1>About page</h1>
          <Footer />
        </main>
      </div>
    );
}
 
export default About;