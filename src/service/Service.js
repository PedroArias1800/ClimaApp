const apiKey = import.meta.env.VITE_APIKEY;

export const ClimaAppService = async (country) => {
  return await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}`
  );
};
