import axios from "axios";

const weatherTool = async ({ city }) => {
    const url = process.env.WEATHER_URL;
    const key = process.env.WEATHER_API_KEY;
    try {
        const res = await axios.get(url, { params: { q: city, appid: key, units: "metric" } });
        return { text: `The weather in ${city} is ${res.data.main.temp}°C with ${res.data.weather[0].description}.` }
    } catch (error) {
        return { text: `Weather data for ${city} is currently unavailable.` }
    }

};
export default weatherTool;