import React from "react";
import { Link } from "react-router-dom";
import {
  InfoWrapper,
  MapWrapper,
  StyledMenu,
  StyledSection,
  Wrapper,
} from "./HideMenu.styles";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../../../assets/img/logo.png";
import MenuLink from "../../atoms/menuLink/MenuLink";

const HideMenu = ({ isMenu, onClick }) => {
  return (
    <StyledSection isMenu={isMenu}>
      <CloseIcon onClick={onClick} />
      <StyledMenu>
        <MenuLink path="/" label="Strona główna" />
        <MenuLink path="/kontakt" label="Kontakt z kancelarią" />
        <MenuLink path="/rewir-komorniczy" label="Rewir komorniczy" />
        <MenuLink path="/wnioski" label="Wnioski do pobrania" />
        <img src={Logo} alt="" />
      </StyledMenu>
      <Wrapper>
        <MapWrapper>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2426.3819093724687!2d19.704546999999998!3d52.544616399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471c709a1b7a9aa7%3A0x3adc0a289da070dc!2s3%20Maja%2016A%2C%2009-402%20P%C5%82ock!5e0!3m2!1spl!2spl!4v1669928077450!5m2!1spl!2spl"></iframe>
        </MapWrapper>
        <InfoWrapper>
          <div>
            <h3>Kancelaria Komornicza nr XI w Płocku</h3>
            <p>ul. 3 Maja 16A/1 09-402 Płock</p>
            <p>(24) 364-20-23</p>
            <p>plock.lagocki@komornik.pl</p>
          </div>
          <div>
            <h3>Godziny pracy</h3>
            <p>Poniedziałek, wtorek, czwartek : 10:00 - 14:00</p>
            <p>Środa: 10:00 - 15:30</p>
            <p>Piątek: 9:00 - 13:00</p>
          </div>
          <div repay={"true"}>
            <h3>Spłata zadłużenia</h3>
            <p>
              W tytule przelewu koniecznie należy podać sygnaturę GKM/KM/KMS/KMP
              oraz imię i nazwisko lub nazwę dłużnika.
            </p>
            <p>BNP Paribas Bank Polska S.A.</p>
            <p>12 1600 1462 1860 7236 6000 0002 </p>
          </div>
        </InfoWrapper>
      </Wrapper>
    </StyledSection>
  );
};

export default HideMenu;
