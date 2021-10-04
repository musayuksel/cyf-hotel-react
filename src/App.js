import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Heading from "./components/Heading";
import TouristInfoCards from "./components/TouristInfoCards";
import Footer from "./components/Footer";
import SearchResults from "./components/SearchResults";
import fakeBookings from "./data/fakeBookings.json";

const hotelAddress = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];
const App = () => {
  return (
    <div className="App">
      <Heading />
      <div className="cardContainer">
        <TouristInfoCards city="Glasgow" />
        <TouristInfoCards city="Manchester" />
        <TouristInfoCards city="London" />
      </div>
      <Bookings />
      <SearchResults fakeBookings={fakeBookings} />
      <Footer addresses={hotelAddress} />
    </div>
  );
};

export default App;
