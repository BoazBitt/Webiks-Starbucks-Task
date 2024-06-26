// this is a github repo where you can get full cordiantes for a country
// i havent tried it but it might be more accurate for chekcing if a store falls inside a polygon
// https://raw.githubusercontent.com/georgique/world-geojson/develop/countries/austria.json

import { CountryList } from "../../interfaces/CountryList.interface";
const mockCountriesList: CountryList = {
  AD: {
    name: "Andorra",
    center: [42.546245, 1.601554],
    bbox: [1.408, 42.428, 1.78, 42.656],
  },
  AE: {
    name: "United Arab Emirates",
    center: [54.3773, 24.4539],
    bbox: [51.583, 22.633, 56.383, 26.083],
  },
  AR: {
    name: "Argentina",
    center: [-63.6167, -38.4161],
    bbox: [-73.583, -55.05, -53.65, -21.783],
  },
  AT: {
    name: "Austria",
    center: [14.5501, 47.5162],
    bbox: [9.533, 46.372, 17.183, 49.02],
  },
  AU: {
    name: "Australia",
    center: [133.7751, -25.2744],
    bbox: [112.916, -55.116, 153.638, -9.225],
  },
  AW: {
    name: "Aruba",
    center: [-69.9683, 12.5211],
    bbox: [-70.063, 12.411, -69.872, 12.631],
  },
  AZ: {
    name: "Azerbaijan",
    center: [47.5769, 40.1431],
    bbox: [44.793, 38.403, 50.37, 41.906],
  },
  BE: {
    name: "Belgium",
    center: [4.4699, 50.5039],
    bbox: [2.546, 49.493, 6.407, 51.505],
  },
  BH: {
    name: "Bahrain",
    center: [50.555, 26.0275],
    bbox: [50.345, 25.787, 50.74, 26.27],
  },
  BG: {
    name: "Bulgaria",
    center: [25.4858, 42.7339],
    bbox: [22.357, 41.242, 28.608, 44.223],
  },
  BN: {
    name: "Brunei",
    center: [114.7277, 4.5353],
    bbox: [114.075, 4.003, 115.364, 5.047],
  },
  BO: {
    name: "Bolivia",
    center: [-63.5887, -16.2902],
    bbox: [-69.64, -22.898, -57.522, -9.68],
  },
  BR: {
    name: "Brazil",
    center: [-51.9253, -14.235],
    bbox: [-73.99, -33.75, -34.792, 5.274],
  },
  BS: {
    name: "Bahamas",
    center: [-77.3963, 25.0343],
    bbox: [-79.474, 20.913, -72.718, 27.285],
  },
  CA: {
    name: "Canada",
    center: [-106.3468, 56.1304],
    bbox: [-141.0, 41.675, -52.622, 83.115],
  },
  CH: {
    name: "Switzerland",
    center: [8.2275, 46.8182],
    bbox: [5.956, 45.832, 10.491, 47.808],
  },
  CL: {
    name: "Chile",
    center: [-71.5429, -35.6751],
    bbox: [-75.645, -55.925, -66.416, -17.506],
  },
  CN: {
    name: "China",
    center: [104.1954, 35.8617],
    bbox: [73.499, 18.161, 134.772, 53.56],
  },
  CO: {
    name: "Colombia",
    center: [-74.2973, 4.5709],
    bbox: [-81.734, -4.227, -66.869, 12.454],
  },
  CR: {
    name: "Costa Rica",
    center: [-83.7534, 9.7489],
    bbox: [-85.95, 8.031, -82.557, 11.219],
  },
  CW: {
    name: "Curaçao",
    center: [-68.8967, 12.1696],
    bbox: [-69.157, 12.022, -68.735, 12.386],
  },
  CY: {
    name: "Cyprus",
    center: [33.4299, 35.1264],
    bbox: [32.27, 34.63, 34.28, 35.704],
  },
  CZ: {
    name: "Czech Republic",
    center: [15.4729, 49.8175],
    bbox: [12.09, 48.556, 18.859, 51.056],
  },
  DE: {
    name: "Germany",
    center: [10.4515, 51.1657],
    bbox: [5.867, 47.27, 15.041, 55.059],
  },
  DK: {
    name: "Denmark",
    center: [9.5018, 56.2639],
    bbox: [8.076, 54.562, 12.691, 57.748],
  },
  EG: {
    name: "Egypt",
    center: [30.8025, 26.8206],
    bbox: [24.698, 22.0, 35.978, 31.666],
  },
  ES: {
    name: "Spain",
    center: [-3.7492, 40.4637],
    bbox: [-9.301, 36.0, 3.317, 43.791],
  },
  FI: {
    name: "Finland",
    center: [25.7482, 61.9241],
    bbox: [20.558, 59.808, 31.588, 70.092],
  },
  FR: {
    name: "France",
    center: [2.2137, 46.6034],
    bbox: [-5.142, 41.342, 9.561, 51.092],
  },
  GB: {
    name: "United Kingdom",
    center: [-3.435973, 55.378051],
    bbox: [-8.616, 49.91, 1.759, 60.844],
  },
  GR: {
    name: "Greece",
    center: [21.8243, 39.0742],
    bbox: [19.373, 34.807, 28.247, 41.748],
  },
  GT: {
    name: "Guatemala",
    center: [-90.2308, 15.7835],
    bbox: [-92.241, 13.735, -88.225, 17.816],
  },
  HU: {
    name: "Hungary",
    center: [19.5033, 47.1625],
    bbox: [16.113, 45.737, 22.898, 48.585],
  },
  ID: {
    name: "Indonesia",
    center: [113.9213, -0.7893],
    bbox: [95.012, -10.359, 141.02, 5.907],
  },
  IE: {
    name: "Ireland",
    center: [-8.2439, 53.4129],
    bbox: [-10.473, 51.445, -5.433, 55.382],
  },
  IN: {
    name: "India",
    center: [78.9629, 20.5937],
    bbox: [68.111, 6.753, 97.351, 35.507],
  },
  JO: {
    name: "Jordan",
    center: [36.2384, 30.5852],
    bbox: [34.959, 29.183, 39.301, 33.374],
  },
  JP: {
    name: "Japan",
    center: [138.2529, 36.2048],
    bbox: [122.938, 24.396, 153.987, 45.551],
  },
  KH: {
    name: "Cambodia",
    center: [104.990963, 12.565679],
    bbox: [102.313, 10.448, 107.614, 14.706],
  },
  KR: {
    name: "South Korea",
    center: [127.766922, 35.907757],
    bbox: [124.612, 33.064, 131.872, 38.612],
  },
  KW: {
    name: "Kuwait",
    center: [47.4818, 29.3759],
    bbox: [46.552, 28.524, 48.431, 30.103],
  },
  KZ: {
    name: "Kazakhstan",
    center: [66.9237, 48.0196],
    bbox: [46.492, 40.584, 87.315, 55.441],
  },
  LB: {
    name: "Lebanon",
    center: [35.8623, 33.8547],
    bbox: [35.099, 33.064, 36.624, 34.695],
  },
  LU: {
    name: "Luxembourg",
    center: [6.1296, 49.8153],
    bbox: [5.744, 49.447, 6.533, 50.182],
  },
  MA: {
    name: "Morocco",
    center: [-7.0926, 31.7917],
    bbox: [-17.019, 21.422, -1.03, 35.922],
  },
  MC: {
    name: "Monaco",
    center: [7.4128, 43.7503],
    bbox: [7.409, 43.726, 7.441, 43.764],
  },
  MX: {
    name: "Mexico",
    center: [-102.5528, 23.6345],
    bbox: [-118.453, 14.536, -86.71, 32.718],
  },
  MY: {
    name: "Malaysia",
    center: [101.9758, 4.2105],
    bbox: [99.645, 0.853, 119.267, 7.349],
  },
  NL: {
    name: "Netherlands",
    center: [5.2913, 52.1326],
    bbox: [3.315, 50.75, 7.228, 53.502],
  },
  NO: {
    name: "Norway",
    center: [8.4689, 60.472],
    bbox: [4.552, 57.987, 31.177, 71.186],
  },
  NZ: {
    name: "New Zealand",
    center: [174.885971, -40.900557],
    bbox: [166.426, -47.289, 178.625, -34.389],
  },
  OM: {
    name: "Oman",
    center: [55.9233, 21.5126],
    bbox: [52.0, 16.65, 59.844, 26.395],
  },
  PA: {
    name: "Panama",
    center: [-80.7821, 8.5379],
    bbox: [-83.054, 7.033, -77.162, 9.703],
  },
  PE: {
    name: "Peru",
    center: [-75.0152, -9.189967],
    bbox: [-81.35, -18.349, -68.665, -0.041],
  },
  PH: {
    name: "Philippines",
    center: [121.774017, 12.879721],
    bbox: [116.934, 5.581, 126.607, 18.65],
  },
  PL: {
    name: "Poland",
    center: [19.1451, 51.9194],
    bbox: [14.073, 49.002, 24.145, 54.836],
  },
  PR: {
    name: "Puerto Rico",
    center: [-66.5901, 18.2208],
    bbox: [-67.268, 17.883, -65.244, 18.515],
  },
  PT: {
    name: "Portugal",
    center: [-8.2245, 39.3999],
    bbox: [-31.274, 32.289, -6.189, 42.154],
  },
  QA: {
    name: "Qatar",
    center: [51.1839, 25.3548],
    bbox: [50.742, 24.475, 51.628, 26.153],
  },
  RO: {
    name: "Romania",
    center: [24.9668, 45.9432],
    bbox: [20.261, 43.612, 29.701, 48.267],
  },
  RU: {
    name: "Russia",
    center: [105.3188, 61.524],
    bbox: [19.661, 41.187, 190.0, 81.85],
  },
  SA: {
    name: "Saudi Arabia",
    center: [45.0792, 23.8859],
    bbox: [34.495, 16.37, 55.673, 32.161],
  },
  SE: {
    name: "Sweden",
    center: [18.6435, 60.1282],
    bbox: [11.118, 55.337, 24.166, 69.037],
  },
  SG: {
    name: "Singapore",
    center: [103.8198, 1.3521],
    bbox: [103.595, 1.16, 104.043, 1.478],
  },
  SK: {
    name: "Slovakia",
    center: [19.699, 48.669],
    bbox: [16.844, 47.733, 22.567, 49.624],
  },
  SV: {
    name: "El Salvador",
    center: [-88.8965, 13.7942],
    bbox: [-90.13, 13.15, -87.723, 14.451],
  },
  TH: {
    name: "Thailand",
    center: [100.9925, 15.87],
    bbox: [97.345, 5.631, 105.639, 20.464],
  },
  TR: {
    name: "Turkey",
    center: [35.2433, 38.9637],
    bbox: [25.665, 35.808, 44.793, 42.107],
  },
  TT: {
    name: "Trinidad and Tobago",
    center: [-61.2225, 10.6918],
    bbox: [-61.923, 10.035, -60.929, 11.38],
  },
  TW: {
    name: "Taiwan",
    center: [120.9605, 23.6978],
    bbox: [119.435, 21.875, 122.005, 25.335],
  },
  US: {
    name: "United States",
    center: [-95.7129, 37.0902],
    bbox: [-125.0, 24.396, -66.934, 49.384],
  },
  VN: {
    name: "Vietnam",
    center: [108.2772, 14.0583],
    bbox: [102.141, 8.179, 109.465, 23.392],
  },
  ZA: {
    name: "South Africa",
    center: [22.9375, -30.5595],
    bbox: [16.45, -34.834, 32.891, -22.126],
  },
};

export default mockCountriesList;
