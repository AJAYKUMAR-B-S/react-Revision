import { RESTAURANTCARD_RECIPE_IMG_URL } from "../utils/constants.js";

const RestaurantCard = (props) => {
  const { name, avgRating, cloudinaryImageId, cuisines, sla } =
    props.restaurantINFO;

  return (
    <div className="restaurantCardContainer">
      <div className="restaurantCardIMGContainer">
        <img
          className="restaurantCardIMG"
          alt="restaurantCardIMG"
          src={`${RESTAURANTCARD_RECIPE_IMG_URL}${cloudinaryImageId}`}
        ></img>
      </div>
      <div className="restaurantCardINFOContainer">
        <h3>{name}</h3>
        <div className="ratingAndDeliveryTimeContainer">
          <p>{avgRating}</p>
          <p>{sla.slaString}</p>
        </div>

        <p className="cuisines">
          {cuisines.length > 3
            ? cuisines.slice(0, 4).join(",  ") + ",  ..."
            : cuisines.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
