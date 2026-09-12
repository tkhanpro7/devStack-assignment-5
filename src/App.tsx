import { Suspense } from "react";
import Navbar from "./component/Nav";
import Hero from "./component/HeroSection";

import TechnologiesSection from "./component/Technologies/TechnologiesSection";
import Footer from "./component/FooterSection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

     
      <Suspense
        fallback={
          <div className="py-20 text-center text-xl font-bold text-slate-500">
            Loading Technologies...
          </div>
        }
      >
        <TechnologiesSection />
      </Suspense>

      <Footer />
    </>
  );
}

export default App;