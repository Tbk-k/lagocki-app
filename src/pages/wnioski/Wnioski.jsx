import React, { useEffect } from "react";
import Path from "../../components/atoms/path/Path";
import Footer from "../../components/organisms/footer/Footer";
import Navbar from "../../components/organisms/navbar/Navbar";
import { StyledSection } from "./Wnioski.styles";
import Files from "../../components/organisms/files/Files";

const Wnioski = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <StyledSection>
      <Navbar isDark />
      <Path path="wnioski" isDark />
      <Files />
      <Footer />
    </StyledSection>
  );
};

export default Wnioski;
