import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props)=>{
  const { resData } = props;
  const { cloudinaryImageId,name,cuisines,avgRating,costForTwoString,deliveryTime } = resData?.data;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img 
        className="res-logo"
      alt="res-logo" 
        src={
          CDN_URL +
          cloudinaryImageId
        } 
      />
      <h3>{name}</h3>
      <h5>{cuisines.join(',')}</h5>
      <h5>{avgRating} Stars</h5>
      <h5>{costForTwoString}</h5>
      <h5>{deliveryTime} mins</h5>

    </div>
  )
};

export default RestaurantCard;