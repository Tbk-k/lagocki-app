import { Link } from "react-router-dom";
import React from "react";
import {
  FilesWrapper,
  InfoWrapper,
  StyledFooter,
  StyledLinks,
  Wrapper,
} from "./Footer.styles";
import Logo from "../../../assets/img/logo.png";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import MenuLink from "../../atoms/menuLink/MenuLink";

const Footer = () => {
  const filesData = [
    {
      id: 1,
      name: "Wniosek o wszczęcie egzekucji",
      url: "Formularz wniosku o wszczęcie egzekucji.PDF",
      color: "#b8cabf",
    },
    {
      id: 2,
      name: "Wniosek egzekucyjny",
      url: "Wniosek egzekucyjny (Km, GKm).PDF",
      color: "#ffdbb4",
    },
    {
      id: 3,
      name: "Wniosek egzekucyjny - alimenty",
      ulr: "Wniosek egzekucyjny - alimenty (Kmp).PDF",
      color: "#ebcec2",
    },
    {
      id: 4,
      name: "Wniosek o wykonanie zabezpieczenia",
      url: "Wniosek o wykonanie zabezpieczenia.PDF",
      color: "",
    },
  ];
  return (
    <StyledFooter>
      <StyledLinks>
        <img src={Logo} alt="" />
        <h3>Menu</h3>
        <menu>
          <MenuLink path="/" label="Strona główna" />
          <MenuLink path="/kontakt" label="Kontakt z kancelarią" />
          <MenuLink path="/rewir-komorniczy" label="Rewir komorniczy" />
          <MenuLink path="/wnioski" label="Wnioski do pobrania" />
        </menu>
      </StyledLinks>
      <Wrapper>
        <FilesWrapper>
          <h3>Pliki do pobrania</h3>
          <ul>
            {filesData.map(({ id, name, url, color }) => (
              <li key={id}>
                <a href={url} download={url}>
                  <DownloadForOfflineIcon style={{ fill: color }} />
                  {name}
                </a>
                <hr />
              </li>
            ))}
          </ul>
        </FilesWrapper>
        <InfoWrapper>
          <img src={Logo} alt="" />
          <div>
            <h3>Kancelaria Komornicza nr XI w Płocku</h3>
            <p>ul. 3 Maja 16A/1 09-402 Płock</p>
            <p>(24) 364-20-23</p>
            <p>plock.lagocki@komornik.pl</p>
          </div>
          <div>
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
    </StyledFooter>
  );
};

export default Footer;
