import React, { useState } from "react";
import { useClima } from "../context/ClimaContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CardClima = () => {

  const { clima } = useClima();
  const { name, main, sys, weather, icon } = clima;

  return (
    <div className="cardClima">
      <section className="paisIcon">
        <div>
          <h2>
            {`${name} (`}<abbr>{`${sys?.country})`}</abbr>
          </h2>
          <p>
            {weather[0]?.main} / {weather[0]?.description}
          </p>
        </div>
        <FontAwesomeIcon icon={icon} alt={`Ícono del Clima ${weather[0]?.main}`} />
      </section>
      <section className="detalles">
        <h2>{Math.floor(main?.feels_like)}°C</h2>
        <div>
          <div>
            <h4>Detalles:</h4>
          </div>
          <div>
            <h4>Temperatura:</h4>
            <h4>{main?.feels_like}°C</h4>
          </div>
          <div>
            <h4>Humedad:</h4>
            <h4>{main?.humidity}%</h4>
          </div>
          <div>
            <h4>Presión:</h4>
            <h4>{main?.pressure} hPs</h4>
          </div>
        </div>
      </section>
      <section className="ultimosDetalles">
        <div>
          <h3>Temperatura Máxima</h3>
          <p>{main?.temp_max}°C</p>
        </div>
        <div>
          <h3>Temperatura Mínima</h3>
          <p>{main?.temp_min}°C</p>
        </div>
      </section>
    </div>
  );
};
