import React from "react";
import Navbar from "../navbar/Navbar";
import { HeroContent, Wrraper } from "./Hero.styles";

const Hero = () => {
  return (
    <Wrraper>
      <Navbar />
      <HeroContent>
        <h1>
          Komorki Sądowy <br />
          Kamil Łagocki
        </h1>
        <hr />
        <div>
          <button>
            Kontakt z <br /> kancelarią
          </button>
          <hr />
          <p>
            Jest funcjonariuszem publicznym działającym przy Sądzie Rejonowym w
            Płocku, realizującym swoje zadania w ramach postępowań komorniczych
            na obszarze Apelacji Łódziej.
          </p>
        </div>
      </HeroContent>
    </Wrraper>
  );
};

export default Hero;
