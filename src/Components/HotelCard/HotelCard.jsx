import { FaStar } from "react-icons/fa";
import PropTypes from 'prop-types';

const HotelCard = ({hotel}) => {
    const { name, numberOfReviews, guests, beds, bathrooms, kitchenType, rating, costPerNight,cancellationFlexibility, imageUrl} = hotel
  return (
    <div className="bg-white  grid sm:grid-cols-2 items-center shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full h-[250px] max-w-5xl max-sm:max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div className="min-h-[200px] p-6 h-full">
        <img
          src={imageUrl}
          className="w-full rounded-sm h-full object-cover"
          alt="Card"
        />
      </div>

      <div className="p-6 space-y-2">
        <h3 className="text-xl font-semibold">{name}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-500">
            <p>{guests} guests</p>
            <p>{beds} bedrooms</p>
            <p>{bathrooms} bathrooms</p>
        </div>
        <p className="text-sm text-gray-400">{kitchenType} kitchen</p>
        <p className="text-sm text-gray-400">{cancellationFlexibility}</p>
        <div className="flex items-center gap-16">
            <div className="flex flex-row gap-1 items-center text-sm text-gray-500">
                <FaStar color="orange"></FaStar>
                <p>{rating} (<span>{numberOfReviews}</span>)</p>
            </div>
            <div className="flex flex-row gap-1 items-center text-sm text-gray-500">
                
                <p><span className="font-bold">{costPerNight}$/</span>Night</p>
            </div>
        </div>
      </div>
    </div>
  );
};
HotelCard.propTypes = {
    hotel: PropTypes.object
}

export default HotelCard;
