import booleanPointInPolygon from "@turf/boolean-point-in-polygon";
import { Polygon, Feature } from "geojson";
import { isInTerritory } from "../../utils/functions/isInTerritory";

jest.mock("@turf/boolean-point-in-polygon");

describe("isInTerritory Function Tests", () => {
  test("returns true when the point is inside the polygon", () => {
    const point: [number, number] = [5, 5];
    const polygon: Feature<Polygon> = {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [0, 0],
            [10, 0],
            [10, 10],
            [0, 10],
            [0, 0],
          ],
        ],
      },
    };
    (booleanPointInPolygon as jest.Mock).mockReturnValue(true);
    expect(isInTerritory(point, polygon)).toBeTruthy();
  });

  test("returns false when the point is outside the polygon", () => {
    const point: [number, number] = [15, 5];
    const polygon: Feature<Polygon> = {
      type: "Feature",
      properties: {},
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [0, 0],
            [10, 0],
            [10, 10],
            [0, 10],
            [0, 0],
          ],
        ],
      },
    };
    (booleanPointInPolygon as jest.Mock).mockReturnValue(false);
    expect(isInTerritory(point, polygon)).toBeFalsy();
  });
});
