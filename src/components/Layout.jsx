 import NavBar2 from "./NavBar2";
 import Footer from "./Footer";

// eslint-disable-next-line react/prop-types
export default function Layout({children}) {
  return (
    <div className="landingDiv">
      <NavBar2 />
      <main className=" overflow-auto flex-grow ">
        {children}
        <Footer />
      </main>
    </div>
  );
}
