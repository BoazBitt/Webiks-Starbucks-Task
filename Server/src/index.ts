import express from "express";
import cors from "cors";
import countriesList from "./utils/CountryList";
import { point, bboxPolygon, booleanPointInPolygon } from "@turf/turf";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use(cors());

app.post("/check-location", (req, res) => {
  const { latitude, longitude, countryCode } = req.body;

  if (!latitude || !longitude || !countryCode) {
    return res.status(400).json({ error: "Invalid input" });
  }

  const country = countriesList[countryCode];

  if (!country) {
    return res.status(404).json({ error: "Country not found" });
  }

  const pointGeo = point([longitude, latitude]);
  const countryPolygon = bboxPolygon(country.bbox);
  const isInside = booleanPointInPolygon(pointGeo, countryPolygon);

  res.json({ isInside });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
