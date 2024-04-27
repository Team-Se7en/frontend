import Footer from "../../../components/navbar_foter/foter/foter";
import Navbar from "../../../components/navbar_foter/navbar/navbar";

function Landing() {
  return (
    <div>
      <Navbar showAuthButtons={true} /> 
      <Footer />
    </div>
  );
}

export default Landing;
