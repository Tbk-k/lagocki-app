import React from "react";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { StyledSection } from "./Files.styles";

const Files = () => {
  const filesData = [
    {
      id: 1,
      name: "Wniosek o wszczęcie egzekucji",
      url: "Formularz wniosku o wszczęcie egzekucji.PDF",
    },
    {
      id: 2,
      name: "Wniosek egzekucyjny",
      url: "Wniosek egzekucyjny (Km, GKm).PDF",
    },
    {
      id: 3,
      name: "Wniosek egzekucyjny - alimenty",
      ulr: "Wniosek egzekucyjny - alimenty (Kmp).PDF",
    },
    {
      id: 4,
      name: "Wniosek o wykonanie zabezpieczenia",
      url: "Wniosek o wykonanie zabezpieczenia.PDF",
    },
  ];

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
        {filesData.map(({ id, name, url }) => (
          <li key={id}>
            <a href={url} download={url}>
              {name}
              <FileDownloadOutlinedIcon />
            </a>
          </li>
        ))}
      </ul>
    </StyledSection>
  );
};

export default Files;
