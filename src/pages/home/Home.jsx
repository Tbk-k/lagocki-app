import React, { useEffect, useRef } from "react";
import About from "../../components/organisms/about/About";
import ContactForm from "../../components/organisms/contactForm/ContactForm";
import ContactInfo from "../../components/organisms/contactInfo/ContactInfo";
import Files from "../../components/organisms/files/Files";
import Footer from "../../components/organisms/footer/Footer";
import Hero from "../../components/organisms/hero/Hero";

const Home = () => {
  const ref = useRef();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <main ref={ref}>
        <Hero />
        <About />
        <ContactInfo />
        <ContactForm />
        <Files />
      </main>
      <Footer />
    </>
  );
};

export default Home;
