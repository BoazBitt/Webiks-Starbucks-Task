# Starbucks Store Locator

## Description

This project creates a web page that displays an Open Layers map showcasing Starbucks store locations. The web page includes a selection box containing the names of all countries. When a user selects a country from the list, the map filters and shows only the Starbucks stores within the selected country's boundaries.

The list of Starbucks stores is dynamically fetched each time the page loads to ensure the most current data.

### Bonus Feature

A service is included that receives the coordinates of a store and a 3-letter country code. The service returns whether the location is inside the relevant country's boundaries.

## Features

- Open Layers map displaying Starbucks store locations
- Dynamic fetching of Starbucks store locations
- Country selection box to filter stores based on geographic coordinates
- Service to verify if a store is within a specified country's boundaries

## Tech Stack

- Frontend: React with Vite
- Backend: Node.js with Express
- Mapping: Open Layers
- Geospatial Calculations: Turf.js

## Installation

### Prerequisites

- Node.js and npm/yarn installed on your machine

### Backend Setup

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd <repository_directory>/server
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Start the server:
   ```bash
   yarn start
   ```

### Frontend Setup

1. Navigate to the client directory:

   ```bash
   cd <repository_directory>/client
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Run the development server:
   ```bash
   yarn dev
   ```

## Usage

1. Open your web browser and navigate to the URL provided by Vite (usually `http://localhost:3000`).
2. The map will load with all Starbucks store locations.
3. Use the country selection box on the side of the map to filter the stores by country.
4. The map will update to show only the stores within the selected country's boundaries.

## Implementation Details

### Data Fetching

The list of Starbucks stores is fetched from a dynamic source each time the page loads to ensure the latest data is displayed.

### Country Boundaries

Country boundaries are defined in a separate file (`CountryList.ts`) containing geographic coordinates (polygons) representing each country.

### Filtering

Filtering is done using geographic coordinates to check if a store falls within the selected country's boundaries using Turf.js.

### Bonus Service

The backend includes an API endpoint that receives the coordinates of a store and a country code, and returns whether the store is within the country's boundaries.

## Client Tests

The client-side code includes tests to ensure the proper functionality of the components.

### Running Client Tests

1. Navigate to the client directory:

   ```bash
   cd <repository_directory>/client
   ```

2. Run the tests:
   ```bash
   yarn test
   ```

## Contact

Your Name - [Linkedin](https://www.linkedin.com/in/boaz-bitton/)

