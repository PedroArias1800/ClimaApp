import React, { useState, useContext, createContext, useEffect } from 'react'
import { ClimaAppService } from '../service/Service';
import { faThunderstorm, faCloudSun, faCloudRain, faCloud, faTornado, faUmbrella, faWind, faUmbrellaBeach, faSnowflake } from "@fortawesome/free-solid-svg-icons";
        /* Thunderstorm, Clear, Rain, Clouds, Dust, Drizzle, Fog, Haze, Mist, Sand, Snow*/

export const useClima = () => {
    const context = useContext(ClimaContext);
    if(!context){
        throw new Error("No existe el contexto");
    }

    return context;
}

export const ClimaContext = createContext();

export const ClimaContextProvider = ({children}) => {

    const [mostrar, setMostrar] = useState(false);
    const [clima, setClima] = useState({
        name: "País",
        main: {
            feels_like: 0,
            humidity: 0,
            pressure: 0,
            temp_max: 0,
            temp_min: 0
        },
        sys: {
            country: "PP"
        },
        weather: [ {
            main: "main",
            description: "description"
        }]
    });

    const CalcularCelsius = (tempNum) => {
        return Math.ceil((tempNum - 273.15) * 100) / 100;
    }

    const FindIcon = (tipo) => {
        switch(tipo){
          case "Thunderstorm":          return faThunderstorm;
          case "Clear":                 return faCloudSun;
          case "Rain":                  return faCloudRain;
          case "Clouds":                return faCloud;
          case "Dust":                  return faTornado;
          case "Drizzle":               return faUmbrella;
          case "Fog", "Haze", "Mist":   return faWind;
          case "Sand":                  return faUmbrellaBeach;
          case "Snow":                  return faSnowflake;                   
        }
      }

    const FindClima = async ( pais = "Panama" ) => {
        const data = await ClimaAppService(pais);
        const resp = await data.json();
        if(data.status === 200 && resp.main) {
            resp.main.feels_like = CalcularCelsius(resp.main.feels_like);
            resp.main.temp_max = CalcularCelsius(resp.main.temp_max);
            resp.main.temp_min = CalcularCelsius(resp.main.temp_min);
            resp.icon = FindIcon(resp.weather[0].main);
            setClima(resp);
        } else {
            setMostrar(true);
            throw new Error(`Error en la petición: Estatus: ${data.status}. Texto: ${data.statusText}`)
        }
    }

    useEffect(() => {
        const func = async () => {
            await FindClima();
        }

        func();
    }, [])

    return <ClimaContext.Provider value={{clima, FindClima, setMostrar}}>
        { children }
    </ClimaContext.Provider>
}