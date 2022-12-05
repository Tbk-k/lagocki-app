import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import { HeroContent, Wrraper } from "./Hero.styles";

const Hero = () => {
  return (
    <Wrraper>
      <Navbar />
      <HeroContent>
        <h1>
          Komornik Sądowy <br />
          Kamil Łagocki <hr />
        </h1>

        <div>
          <Link to="/kontakt">
            <button>
              Kontakt z <br /> kancelarią
            </button>
          </Link>
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
