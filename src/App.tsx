import { Suspense } from "react";
import Navbar from "./component/Nav";
import Hero from "./component/HeroSection";
// ফিক্স: SectionHeader-এর বদলে TechnologiesSection ইম্পোর্ট করতে হবে
import TechnologiesSection from "./component/Technologies/TechnologiesSection";
import Footer from "./component/FooterSection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* Suspense-এর ভেতরে মেইন TechnologiesSection কম্পোনেন্টটি দিতে হবে */}
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