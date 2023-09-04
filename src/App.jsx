import { Navbar } from "./components";
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";

const App = () => {
  return (
    <>
      <div className="bg-[#edf2f8] font-mono">
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
};

export default App;
