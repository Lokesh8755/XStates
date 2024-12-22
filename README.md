# XStates

XStates is an interactive location selection application that dynamically populates dropdown menus for selecting a country, state, and city. This project is designed as a small buildout to showcase how to integrate APIs for hierarchical data selection, making it an ideal learning project for frontend developers.

---

## Features

- **Dynamic Dropdowns**: 
  - Displays three dropdown menus for selecting a country, state, and city.
  - The dropdowns are interdependent, with state options loaded based on the selected country and city options loaded based on the selected state.

- **API Integration**:
  - Fetches data for countries, states, and cities from provided API endpoints.
  - Handles API errors gracefully and ensures smooth user interaction.

- **Conditional Rendering**:
  - Dropdowns are enabled/disabled based on user selections, ensuring logical navigation.

---

## Tech Stack

- **Frontend Framework**: React (with functional components and hooks)
- **State Management**: React Hooks (`useState`, `useEffect`)
- **HTTP Requests**: Axios
- **Styling**: CSS

---

## API Endpoints

1. **Get All Countries**  
   Endpoint: `https://crio-location-selector.onrender.com/countries`

2. **Get States of a Specific Country**  
   Endpoint: `https://crio-location-selector.onrender.com/country={countryName}/states`

3. **Get Cities of a Specific State in a Specific Country**  
   Endpoint: `https://crio-location-selector.onrender.com/country={countryName}/state={stateName}/cities`

---

## How It Works

1. **Country Selection**:  
   - On initial render, the country dropdown is populated with data fetched from the countries API.

2. **State Selection**:  
   - When a country is selected, the corresponding states are fetched and populated in the state dropdown.
   - The state dropdown is enabled only after a country is selected.

3. **City Selection**:  
   - When a state is selected, the corresponding cities are fetched and populated in the city dropdown.
   - The city dropdown is enabled only after a state is selected.

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/XStates.git
