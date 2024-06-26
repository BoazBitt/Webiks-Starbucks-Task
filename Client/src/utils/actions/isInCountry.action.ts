import axios from "axios";
const PATH_SERVER = `http://localhost:3000`;
export const isInCountry = async (
  latitude: number,
  longitude: number,
  countryCode: string
): Promise<{ isInside: boolean }> => {
  try {
    console.log("here", latitude, longitude, countryCode);
    const { data } = await axios.post(`${PATH_SERVER}/check-location`, {
      latitude,
      longitude,
      countryCode,
    });
    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return error.response.data;
  }
};
