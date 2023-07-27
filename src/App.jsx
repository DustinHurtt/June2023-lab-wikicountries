import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import HomePage from "./pages/HomePage";

import Navbar from "./components/Navbar";
import CountryDetailsPage from "./pages/CountryDetailsPage";

function App() {

  const [countries, setCountries] = useState([])

  useEffect(() => {

    axios.get('https://ih-countries-api.herokuapp.com/countries')
      .then((results) => {
        console.log("Countries", results.data)
        setCountries(results.data)
      })
      .catch((err) => {
        console.log(err)
      })

  }, [])


  return (
    <div className="App">

    <Navbar />

    <Routes>

      <Route path="/" element={<HomePage countries={countries} />} />
      <Route path="/:countryId" element={<CountryDetailsPage countries={countries} />} />

    </Routes>


    </div>
  );
}

export default App;
