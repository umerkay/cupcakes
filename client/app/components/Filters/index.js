import React from "react";
import "./index.scss";
import SelectSearch from "react-select-search";

export default function index() {
  return (
    <div className="filtercontainer">
      <h2>Filter your search</h2>
      <div class="filtercontent">
        <div>
          <div class="filter">
            <h3 class="title">Car Model Year</h3>
            <SelectSearch
              options={["2013", "2014", "2015", "2016"].map((c) => ({
                value: c,
                name: c,
              }))}
            ></SelectSearch>
          </div>
          <div class="filter">
            <h3 class="title">Car Power</h3>
            <SelectSearch
              options={["500cc", "1000cc", "1200cc", "1500cc"].map((c) => ({
                value: c,
                name: c,
              }))}
            ></SelectSearch>
          </div>
        </div>
      </div>
    </div>
  );
}
