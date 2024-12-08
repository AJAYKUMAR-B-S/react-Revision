import RESTAURANT_MOCK_DATA from "../utils/swiggyMockData.js";
import RestaurantCard from "./RestaurantCard.js";
const Main = () => {
  return (
    <main className="mainContainer">
      <div className="searchContainer">
        <input type="text" placeholder="search recipe"></input>
        <button className="searchBTN">search</button>
      </div>
      <div className="filterContainer">
        <button
          className="topRatedBTN"
          onClick={() => {
            console.log("clicked");
          }}
        >
          top rated
        </button>
      </div>
      <div className="restaurantContainer">
        {RESTAURANT_MOCK_DATA.card.card.gridElements.infoWithStyle.restaurants.map(
          (data) => {
            return (
              <RestaurantCard key={data.info.id} restaurantINFO={data.info} />
            );
          }
        )}
      </div>
    </main>
  );
};
export default Main;
