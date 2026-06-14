import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Fixed bokeh background — visible throughout entire page */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div
          className="absolute"
          style={{
            top: "-15%",
            left: "-12%",
            width: "700px",
            height: "700px",
            borderRadius: "50%",
            background: "#4338CA",
            filter: "blur(160px)",
            opacity: 0.08,
          }}
        />
        <div
          className="absolute"
          style={{
            bottom: "5%",
            right: "-10%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "#6D28D9",
            filter: "blur(150px)",
            opacity: 0.07,
          }}
        />
        <div
          className="absolute"
          style={{
            top: "45%",
            left: "35%",
            width: "450px",
            height: "450px",
            borderRadius: "50%",
            background: "#1D4ED8",
            filter: "blur(180px)",
            opacity: 0.05,
          }}
        />
      </div>

      <main className="relative overflow-hidden" style={{ zIndex: 1 }}>
        <Navbar />
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Process />
        <Testimonials />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
