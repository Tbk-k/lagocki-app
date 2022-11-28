import React from "react";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { StyledSection } from "./Files.styles";

const Files = () => {
  return (
    <StyledSection>
      <h2>Pliki do pobrania</h2>
      <p>
        W celu wszczęcia postępowania, należy złożyć stosowny wniosek drogą
        pocztową lub osobiście w kancelarii po wcześniejszym umówieniu
        spotkania. Do wniosku należy dołączyć oryginał wyroku zaopatrzony w
        klauzulę wykonalności.
      </p>
      <ul>
        <li>
          <a href="">
            Nazwa pliku 1
            <FileDownloadOutlinedIcon />
          </a>
        </li>
        <li>
          <a href="">
            Nazwa pliku 1
            <FileDownloadOutlinedIcon />
          </a>
        </li>
        <li>
          <a href="">
            Nazwa pliku 1
            <FileDownloadOutlinedIcon />
          </a>
        </li>
        <li>
          <a href="">
            Nazwa pliku 1
            <FileDownloadOutlinedIcon />
          </a>
        </li>
      </ul>
    </StyledSection>
  );
};

export default Files;
