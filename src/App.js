import React, { useEffect, useRef } from "react";
import ClientLogo from "./Components/ClientLogo";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NewsSection from "./Components/NewsSection";
import OurServices from "./Components/OurServices";
import Sliders from "./Components/Slider";
import StatsSection from "./Components/StatSection";
import Test from "./Components/Test";
import Welcome from "./Components/Welcome";

function App() {
  const headerRef = useRef(null);
  const slidersRef = useRef(null);
  const welcomeRef = useRef(null);
  const servicesRef = useRef(null);
  const statsRef = useRef(null);
  const testRef = useRef(null);
  const clientLogoRef = useRef(null);
  const newsRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const headerTop = headerRef.current.getBoundingClientRect().top;
      const slidersTop = slidersRef.current.getBoundingClientRect().top;
      const welcomeTop = welcomeRef.current.getBoundingClientRect().top;
      const servicesTop = servicesRef.current.getBoundingClientRect().top;
      const statsTop = statsRef.current.getBoundingClientRect().top;
      const testTop = testRef.current.getBoundingClientRect().top;
      const clientLogoTop = clientLogoRef.current.getBoundingClientRect().top;
      const newsTop = newsRef.current.getBoundingClientRect().top;
      const footerTop = footerRef.current.getBoundingClientRect().top;

      // Check if the element is in the viewport
      const isInViewport = (top) => top >= 0 && top <= window.innerHeight;

      if (isInViewport(headerTop)) {
        console.log("Header in viewport");
      }
      if (isInViewport(slidersTop)) {
        console.log("Sliders in viewport");
      }
      if (isInViewport(welcomeTop)) {
        console.log("Welcome in viewport");
      }
      if (isInViewport(servicesTop)) {
        console.log("Services in viewport");
      }
      if (isInViewport(statsTop)) {
        console.log("Stats in viewport");
      }
      if (isInViewport(testTop)) {
        console.log("Test in viewport");
      }
      if (isInViewport(clientLogoTop)) {
        console.log("ClientLogos in viewport");
      }
      if (isInViewport(newsTop)) {
        console.log("News in viewport");
      }
      if (isInViewport(footerTop)) {
        console.log("Footer in viewport");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div ref={headerRef}>
        <Header />
      </div>
      <div ref={slidersRef}>
        <Sliders />
      </div>
      <div ref={welcomeRef}>
        <Welcome />
      </div>
      <div ref={servicesRef}>
        <OurServices />
      </div>
      <div ref={statsRef}>
        <StatsSection />
      </div>
      <div ref={testRef}>
        <Test />
      </div>
      <div ref={clientLogoRef}>
        <ClientLogo />
      </div>
      <div ref={newsRef}>
        <NewsSection />
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}

export default App;

