import React from "react";

import SearchResult from "../../components/search-result/SearchResult";

import { Button } from "@material-ui/core";

import "./search-page.style.css";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays · 26 august to 30 august · 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.73}
        price="£30 / night"
        total="£117 total"
      />

      <SearchResult
        img="https://images.pexels.com/photos/2747901/pexels-photo-2747901.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        location="Private room in center of London"
        title="Luxury studio apartment"
        description="2 guest · 3 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen"
        star={4.3}
        price="£40 / night"
        total="£157 total"
      />
      <SearchResult
        img="https://images.pexels.com/photos/2029731/pexels-photo-2029731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        location="Private room in center of London"
        title="London Studio Apartments"
        description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
        star={3.8}
        price="£35 / night"
        total="£207 total"
      />
      <SearchResult
        img="https://images.pexels.com/photos/3637740/pexels-photo-3637740.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        location="Private room in center of London"
        title="30 mins to Oxford Street, Excel London"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={4.1}
        price="£55 / night"
        total="£320 total"
      />
      <SearchResult
        img="https://images.pexels.com/photos/2416933/pexels-photo-2416933.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        location="Private room in center of London"
        title="Spacious Peaceful Modern Bedroom"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning"
        star={5.0}
        price="£60 / night"
        total="£450 total"
      />
      <SearchResult
        img="https://images.pexels.com/photos/4112557/pexels-photo-4112557.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        location="Private room in center of London"
        title="Cosy Room In London"
        description="2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine"
        star={4.23}
        price="£65 / night"
        total="£480 total"
      />
      <SearchResult
        img="https://images.pexels.com/photos/90319/pexels-photo-90319.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        location="Private room in center of London"
        title="5 Star Luxury Apartment"
        description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
        star={3.85}
        price="£90 / night"
        total="£650 total"
      />
    </div>
  );
};

export default SearchPage;
