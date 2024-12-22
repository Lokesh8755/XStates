import SelectLocation from './components/SelectLocation'
import './App.css'
import {useState,useEffect} from 'react';
import axios from 'axios';

function App() {

  const [countries,setCountries] = useState([]);
  const [states,setStates] = useState([]);
  const [cities,setCities] = useState([]);

  const [selectedCountries,setSelectedCountries] = useState("");
  const [selectedState,setSelectedState] = useState("");
  const [selectedCity,setSelectedCity] = useState("");

  const [isStateDropdownEnabled,setIsStateDropdownEnabled] = useState(false);
  const [isCityDropdownEnabled,setIsCityDropdownEnabled] = useState(false);

  const COUNTRIES_API = "https://crio-location-selector.onrender.com/countries";
  const STATE_API = " https://crio-location-selector.onrender.com/country={countryName}/states";
  const CITY_API = "https://crio-location-selector.onrender.com/country={countryName}/state={stateName}/cities";

  //fetch countries on initial render
  useEffect(() => {
    axios
    .get(COUNTRIES_API)
    .then((response) => {
      setCountries(response.data);
    })
    .catch((error) => {
      console.error("Error fetching countries",error);
    });
  },[]);

  // Fetch states when a country is selected
  useEffect(() => {
    if(selectedCountries){
      const url = STATE_API.replace("{countryName}",selectedCountries)
      axios
      .get(url)
      .then((response) => {
        setStates(response.data);
        setIsStateDropdownEnabled(true); // Enable the state Dropdown
        setCities([]) // Reset Cities
        setIsCityDropdownEnabled(false); // Disable the city dropdown
      })
      .catch((error) => {
        console.error("Error fetching States:",error);
      });
    }
  },[selectedCountries])

  // Fetch cities when state is selected
  useEffect(() => {
    if(selectedState){
      const url = CITY_API.replace("{countryName}",selectedCountries).replace("{stateName}",selectedState)
      axios
      .get(url)
      .then((response) => {
        setCities(response.data);
        setIsCityDropdownEnabled(true); // Enable the cities dropdown
      })
      .catch((error) => {
        console.error("Error fetching cities:", error)
      });
    }
  },[selectedState]);

  return (
    <div className="App">
      <SelectLocation
      countries={countries}
      states={states}
      cities={cities}
      selectedCountries={selectedCountries}
      setSelectedCountries={setSelectedCountries}
      selectedState={selectedState}
      setSelectedState={setSelectedState}
      selectedCity={selectedCity}
      setSelectedCity={setSelectedCity}
      isStateDropdownEnabled={isStateDropdownEnabled}
      isCityDropdownEnabled={isCityDropdownEnabled}
      />
    </div>
  );
}

export default App;
