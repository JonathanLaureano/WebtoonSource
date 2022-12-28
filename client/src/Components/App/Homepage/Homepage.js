import React from "react";
import "./Homepage.css"
import Banner from "./Banner/Banner";
import NewArrivals from "./NewArrivals/NewArrivals";
import PopularGenres from "./PopularGenres/PopularGenres";
import TopSeries from "./TopSeries/TopSeries";
import RecentlyUpdated from "./RecentlyUpdated/RecentlyUpdated";

function Homepage({ top100Films }) {
  return (
    <div className="Homepage">
      <Banner/>
      <TopSeries top100Films={ top100Films }/>
      <NewArrivals/>
      <PopularGenres/>
      <RecentlyUpdated/>
    </div>
  );
}

export default Homepage;