import React, { useEffect, useState } from "react";
import {
  InnerWrapper,
  StyledAlert,
  StyledAns,
  StyledError,
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
import axios from "axios";
import { courts } from "../../assets/data/właściwość_sądów_powszechnych";
import { zipCodes } from "../../assets/data/ZipCodes";

const Rewir = () => {
  const formField = {
    id: 1,
    type: "text",
    name: "zipCode",
    placeholder: "Kod pocztowy",
    required: true,
    format: "##-###",
    mask: "_",
    autoComplete: "off",
  };

  const [alert, setAlert] = useState(true);
  const [data, setData] = useState({
    isCorrect: false,
    zipCode: "",
    court: "",
    city: "",
    error: "",
  });

  const [isAnsShown, setAnsState] = useState(false);

  const changeHandler = (e) => {
    setData((prev) => ({ ...prev, zipCode: e.target.value, error: "" }));
    setAnsState(false);
  };

  const getCourt = (city) => {
    const found = courts.find((element) => element.rewir.includes(city));
    setData((prev) => ({ ...prev, court: found?.name }));
  };

  const isCorrect = (zipCode) => {
    setData((prev) => ({ ...prev, isCorrect: zipCodes.includes(zipCode) }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://kodpocztowy.intami.pl/api/${data.zipCode}`
      );
      setData((prev) => ({ ...prev, city: res.data[0].powiat }));
      getCourt(res.data[0].gmina);
      isCorrect(data.zipCode);
      setAnsState(true);
    } catch (err) {
      setData((prev) => ({ ...prev, error: err.message }));
    }
  };

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
            <StyledForm onSubmit={submitHandler}>
              {data.error ? (
                <StyledError>Podano nieprawidłowy kod pocztowy.</StyledError>
              ) : null}
              <Input
                props={formField}
                onChange={changeHandler}
                value={data.zipCode}
              />
              <button>
                sprawdź <SearchIcon />
              </button>
            </StyledForm>
            {isAnsShown ? (
              <StyledAns>
                <p>{data.court}</p>
                <p>{data.zipCode}</p>
                <p>powiat {data.city}</p>
                <p>
                  Właściwość dłużnika
                  {data.isCorrect
                    ? " mieści się w obszarze "
                    : " znajduje się poza obszarem "}
                  działania Komornika Sądowego Kamila Łagockiego.
                </p>
              </StyledAns>
            ) : null}
          </InnerWrapper>
        </Wrapper>
      </StyledSection>
      <Footer />
    </>
  );
};

export default Rewir;
