import React from "react";
import ContactForm from "../../components/organisms/contactForm/ContactForm";
import ContactInfo from "../../components/organisms/contactInfo/ContactInfo";
import Files from "../../components/organisms/files/Files";
import Hero from "../../components/organisms/hero/Hero";
import Navbar from "../../components/organisms/navbar/Navbar";

const Home = () => {
  return (
    <main>
      <Hero />
      <ContactInfo />
      <ContactForm />
      <Files />
    </main>
  );
};

export default Home;
