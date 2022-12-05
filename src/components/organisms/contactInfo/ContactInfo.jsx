import React from "react";
import { Item, StyledSection, Wrapper } from "./ContactInfo.styles";
import { ReactComponent as Geo } from "../../../assets/img/geo.svg";
import { ReactComponent as Clock } from "../../../assets/img/clock.svg";
import { ReactComponent as Info } from "../../../assets/img/info-circle.svg";

const ContactInfo = () => {
  return (
    <StyledSection>
      <Wrapper>
        <Item>
          <Geo />
          <h3>Kancelaria Komornicza nr XI w Płocku </h3>
          <p>ul. 3 Maja 16A/1 09-402 Płock</p>
          <p>(24) 364-20-23</p>
          <p>plock.lagocki@komornik.pl</p>
        </Item>
        <Item>
          <Clock />
          <h3>Godziny pracy</h3>
          <p>Poniedziałek, wtorek, czwartek : 10:00 - 14:00</p>
          <p>Środa: 10:00 - 15:30</p>
          <p>Piątek: 9:00 - 13:00</p>
        </Item>
        <Item>
          <Info />
          <h3>Spłata zadłużenia </h3>
          <p>
            W tytule przelewu koniecznie należy podać sygnaturę GKM/KM/KMS/KMP
            oraz imię i nazwisko lub nazwę dłużnika.
          </p>
          <p>BNP Paribas Bank Polska S.A.</p>
          <p>12 1600 1462 1860 7236 6000 0002</p>
        </Item>
      </Wrapper>
    </StyledSection>
  );
};

export default ContactInfo;
