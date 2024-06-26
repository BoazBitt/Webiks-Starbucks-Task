import booleanPointInPolygon from "@turf/boolean-point-in-polygon";
import { Polygon, Feature } from "geojson";

export const isInTerritory = (
  point: [number, number],
  polygon: Feature<Polygon>
): boolean => {
  return booleanPointInPolygon(point, polygon);
};
