import { getWeather } from "./weather";

getWeather(35.2271, -80.8431, "America/New_York").then((res) => {
  console.log(res.data);
});
