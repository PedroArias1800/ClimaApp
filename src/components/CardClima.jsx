import React, { useState } from "react";
import { useClima } from "../context/ClimaContext";

export const CardClima = () => {
  const [tempC, setTempC] = useState(0);

  const { clima } = useClima();
  

  return (
    <div>
      <section>
        <div>
          <h2>
            {`${clima.name} (`}<abbr>{`${clima.sys?.country})`}</abbr>
          </h2>
          <p>
            {clima.weather[0]?.main} / {clima.weather[0]?.description}
          </p>
        </div>
        <img src="" alt={`Ícono del Clima ${clima.weather[0]?.main}`} />
      </section>
      <section>
        <h2>{Math.floor(clima.main?.feels_like)}°C</h2>
        <div>
          <div>
            <h4>Detalles:</h4>
          </div>
          <div>
            <h4>Temperatura:</h4>
            <h4>{clima.main?.feels_like}°C</h4>
          </div>
          <div>
            <h4>Humedad:</h4>
            <h4>{clima.main?.humidity}%</h4>
          </div>
          <div>
            <h4>Presión:</h4>
            <h4>{clima.main?.pressure} hPs</h4>
          </div>
        </div>
      </section>
      <section>
        <div>
          <h3>Temperatura Máxima</h3>
          <p>{clima.main?.temp_max}°C</p>
        </div>
        <div>
          <h3>Temperatura Mínima</h3>
          <p>{clima.main?.temp_min}°C</p>
        </div>
      </section>
    </div>
  );
};
