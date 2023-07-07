import React, { useState, useContext, createContext, useEffect } from 'react'
import { ClimaAppService } from '../service/Service';

export const useClima = () => {
    const context = useContext(ClimaContext);
    if(!context){
        throw new Error("No existe el contexto");
    }

    return context;
}

export const ClimaContext = createContext();

export const ClimaContextProvider = ({children}) => {

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
        weather: {
            main: "main",
            description: "description"
        }
    });

    const CalcularCelsius = (tempNum) => {
        return Math.ceil((tempNum - 273.15) * 100) / 100;
    }

    const FindClima = async ( pais ) => {
        const data = await ClimaAppService(pais);
        const resp = await data.json();
        if(resp.main) {
            resp.main.feels_like = CalcularCelsius(resp.main.feels_like);
            resp.main.temp_max = CalcularCelsius(resp.main.temp_max);
            resp.main.temp_min = CalcularCelsius(resp.main.temp_min);
        }
        setClima(resp);
    }

    useEffect(() => {
        const func = async () => {
            await FindClima("Panama");
        }

        func();
    }, [])

    return <ClimaContext.Provider value={{clima, FindClima}}>
        { children }
    </ClimaContext.Provider>
}