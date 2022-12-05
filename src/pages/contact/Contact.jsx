import React, { useEffect } from "react";
import Navbar from "../../components/organisms/navbar/Navbar";
import { StyledHeader, StyledSection, Wrapper } from "./Contact.styles";
import Path from "../../components/atoms/path/Path";
import ContactInfo from "../../components/organisms/contactInfo/ContactInfo";
import ContactForm from "../../components/organisms/contactForm/ContactForm";
import Footer from "../../components/organisms/footer/Footer";

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <StyledSection>
      <Navbar isDark />
      <Path path="Kontakt" isDark />
      <Wrapper>
        <StyledHeader>Kontakt z kancelarią</StyledHeader>
        <ContactInfo />
      </Wrapper>
      <ContactForm />
      <Footer />
    </StyledSection>
  );
};

export default Contact;
