import React from 'react'
import '../App.css'

const SelectLocation = ({
    countries,
    states,
    cities,
    selectedCountries,
    setSelectedCountries,
    selectedState,
    setSelectedState,
    selectedCity,
    setSelectedCity,
    isStateDropdownEnabled,
    isCityDropdownEnabled,
}) => {
  return (
    <div>
      <h1 className="heading">Select Location</h1>

       {/* Country Dropdown */}
      <select id="countryDropdown"
              className="selectInputs"
              value={selectedCountries}
              onChange={(e) => setSelectedCountries(e.target.value)}
      >
        <option value="">Select Country</option> 
        {countries.map((country) => (
            <option key={country} value={country}>{country}</option>
        ))}
      </select>
      
      {/* State Dropdown */}
      <select 
      id="stateDropdown" 
      className="selectInputs"
      value={selectedState}
      onChange={(e) => setSelectedState(e.target.value)}
      disabled={!isStateDropdownEnabled}
      >
        <option value="">Select State</option> 
        {states.map((state) => (
            <option key={state} value={state}>
                {state}
            </option>
        ))}
      </select>

      {/* City Dropdown */}
      <select 
      id="cityDropdown" 
      className="selectInputs"
      value={selectedCity}
      onChange={(e) => setSelectedCity(e.target.value)}
      disabled={!isCityDropdownEnabled}
      >
        <option value="">Select City</option> 
        {cities.map((city) => (
            <option key={city} value={city}>
                {city}
            </option>
        ))}
      </select>

      {/* Display Selected Location */}
      <div className="selectedLocationDisplay">
        {selectedCountries && (
          <p>Selected Country: {selectedCountries}</p>
        )}
        {selectedState && (
          <p>Selected State: {selectedState}</p>
        )}
        {selectedCity && (
          <p>Selected City: {selectedCity}</p>
        )}
      </div>
    </div>
  )
}

export default SelectLocation
