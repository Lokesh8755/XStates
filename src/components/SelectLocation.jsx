import React, { useState } from 'react';
import '../App.css';

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
    const handleCountryChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedCountries(selectedValue);
    };

    const handleStateChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedState(selectedValue);
    };

    const handleCityChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedCity(selectedValue);
    };

    return (
        <div>
            <h1 className="heading">Select Location</h1>

            {/* Country Dropdown */}
            <select
                id="countryDropdown"
                className="selectInputs"
                value={selectedCountries}
                onChange={handleCountryChange}
            >
                <option value="">Select Country</option>
                {countries.map((country) => (
                    <option key={country} value={country}>
                        {country}
                    </option>
                ))}
            </select>

            {/* State Dropdown */}
            <select
                id="stateDropdown"
                className="selectInputs"
                value={selectedState}
                onChange={handleStateChange}
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
                onChange={handleCityChange}
                disabled={!isCityDropdownEnabled}
            >
                <option value="">Select City</option>
                {cities.map((city) => (
                    <option key={city} value={city}>
                        {city}
                    </option>
                ))}
            </select>

            {/* Display Selected Values */}
            <div className="selectedValues">
                {selectedCity && selectedState && selectedCountries && (
                    <p>You selected <span className="displayH2">{selectedCity}</span>, {selectedState}, {selectedCountries}</p>
                )}
            </div>
        </div>
    );
};

export default SelectLocation;
