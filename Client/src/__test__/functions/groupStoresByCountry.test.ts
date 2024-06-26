import { Location } from "../../interfaces/Location.interface";
import { groupStoresByCountry } from "../../utils/functions/groupStoresByCountry";

test("correctly groups locations by country", () => {
  const locations = [
    {
      city: "New York",
      name: "Store NY1",
      country: "USA",
      longitude: -74.006,
      latitude: 40.7128,
      store_id: 101,
    },
    {
      city: "Los Angeles",
      name: "Store LA1",
      country: "USA",
      longitude: -118.2437,
      latitude: 34.0522,
      store_id: 102,
    },
    {
      city: "Toronto",
      name: "Store TO1",
      country: "Canada",
      longitude: -79.3832,
      latitude: 43.6532,
      store_id: 201,
    },
    {
      city: "Vancouver",
      name: "Store VC1",
      country: "Canada",
      longitude: -123.1216,
      latitude: 49.2827,
      store_id: 202,
    },
    {
      city: "London",
      name: "Store LD1",
      country: "UK",
      longitude: -0.1276,
      latitude: 51.5074,
      store_id: 301,
    },
    {
      city: "Manchester",
      name: "Store MC1",
      country: "UK",
      longitude: -2.2426,
      latitude: 53.4808,
      store_id: 302,
    },
  ];

  const grouped = groupStoresByCountry(locations);
  expect(grouped).toEqual({
    USA: [
      {
        city: "New York",
        name: "Store NY1",
        country: "USA",
        longitude: -74.006,
        latitude: 40.7128,
        store_id: 101,
      },
      {
        city: "Los Angeles",
        name: "Store LA1",
        country: "USA",
        longitude: -118.2437,
        latitude: 34.0522,
        store_id: 102,
      },
    ],
    Canada: [
      {
        city: "Toronto",
        name: "Store TO1",
        country: "Canada",
        longitude: -79.3832,
        latitude: 43.6532,
        store_id: 201,
      },
      {
        city: "Vancouver",
        name: "Store VC1",
        country: "Canada",
        longitude: -123.1216,
        latitude: 49.2827,
        store_id: 202,
      },
    ],
    UK: [
      {
        city: "London",
        name: "Store LD1",
        country: "UK",
        longitude: -0.1276,
        latitude: 51.5074,
        store_id: 301,
      },
      {
        city: "Manchester",
        name: "Store MC1",
        country: "UK",
        longitude: -2.2426,
        latitude: 53.4808,
        store_id: 302,
      },
    ],
  });
});

test("returns an empty object for empty input", () => {
  const locations: Location[] = [];
  const grouped = groupStoresByCountry(locations);
  expect(grouped).toEqual({});
});

test("groups all locations under a single country key when all locations are from the same country", () => {
  const locations = [
    {
      city: "Paris",
      name: "Store PA1",
      country: "France",
      longitude: 2.3522,
      latitude: 48.8566,
      store_id: 401,
    },
    {
      city: "Lyon",
      name: "Store LY1",
      country: "France",
      longitude: 4.8357,
      latitude: 45.764,
      store_id: 402,
    },
    {
      city: "Nice",
      name: "Store NI1",
      country: "France",
      longitude: 7.262,
      latitude: 43.7102,
      store_id: 403,
    },
  ];
  const grouped = groupStoresByCountry(locations);
  expect(grouped).toEqual({
    France: [...locations],
  });
});
