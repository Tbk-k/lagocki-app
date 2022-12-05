import React, { useEffect, useState } from "react";
import {
  InnerWrapper,
  StyledAlert,
  StyledAns,
  StyledForm,
  StyledSection,
  Wrapper,
} from "./Rewir.styles";
import Navbar from "../../components/organisms/navbar/Navbar";
import Input from "../../components/atoms/input/Input";
import SearchIcon from "@mui/icons-material/Search";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Path from "../../components/atoms/path/Path";
import Footer from "../../components/organisms/footer/Footer";

const Rewir = () => {
  const formField = {
    id: 1,
    type: "text",
    name: "zipCode",
    placeholder: "Kod pocztowy",
    required: true,
  };

  const [alert, setAlert] = useState(true);
  const [isCorrect, serCorrect] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <StyledSection>
        <Navbar />
        <Wrapper>
          <Path path="rewir komorniczy" />
          <InnerWrapper>
            <StyledAlert alert={alert}>
              <InfoOutlinedIcon
                onClick={() => {
                  setAlert((prev) => !prev);
                }}
              />
              <p>
                Sprawdź czy miejsce zamieszkania / siedziba dłużnika mieści się
                w obszarze właściwości Sądu Apelacyjnego w Łodzi.
              </p>
            </StyledAlert>
            <StyledForm action="">
              <Input props={formField} />
              <button>
                sprawdź <SearchIcon />
              </button>
            </StyledForm>
            <StyledAns>
              <p>
                Właściwość dłużnika
                {isCorrect
                  ? " mieści się w obszarze "
                  : " znajduje się poza obszarem "}
                działania Komornika Sądowego Kamila Łagockiego.
              </p>
            </StyledAns>
          </InnerWrapper>
        </Wrapper>
      </StyledSection>
      <Footer />
    </>
  );
};

export default Rewir;
