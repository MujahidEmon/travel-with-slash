import { FaStar } from "react-icons/fa";

const HotelCard = ({hotel}) => {
    const {id, name, numberOfReviews, guests, beds, bathrooms, kitchenType, rating, costPerNight,cancellationFlexibility, imageUrl} = hotel
  return (
    <div className="bg-white  grid sm:grid-cols-2 items-center shadow-[0_4px_12px_-5px_rgba(0,0,0,0.4)] w-full max-w-2xl max-sm:max-w-sm rounded-lg font-[sans-serif] overflow-hidden mx-auto mt-4">
      <div className="min-h-[200px] p-6 h-full">
        <img
          src={imageUrl}
          className="w-full h-full object-cover"
          alt="Card"
        />
      </div>

      <div className="p-6 space-y-2">
        <h3 className="text-xl font-semibold">{name}</h3>
        <div className="flex items-center gap-2 text-sm text-gray-500">
            <p>{beds} guests</p>
            <p>{beds} bedrooms</p>
            <p>{bathrooms} bathrooms</p>
        </div>
        <p className="text-sm text-gray-400">{kitchenType} kitchen</p>
        <p className="text-sm text-gray-400">{cancellationFlexibility}</p>
        <div className="flex items-center justify-between">
            <div className="flex flex-row gap-1 items-center text-sm text-gray-500">
                <FaStar color="orange"></FaStar>
                <p>{rating} (<span>{numberOfReviews}</span>)</p>
            </div>
            <div className="flex flex-row gap-1 items-center text-sm text-gray-500">
                
                <p><span className="font-bold">{costPerNight}$/</span>per night</p>
            </div>
        </div>
        {/* <div className="flex flex-wrap items-center cursor-pointer border border-gray-300 rounded-lg w-full px-4 py-2 mt-6">
          <img
            src="https://readymadeui.com/profile_2.webp"
            className="w-9 h-9 rounded-full"
            alt="Profile"
          />
          <div className="ml-4 flex-1">
            <p className="text-sm text-gray-800 font-semibold">John Doe</p>
            <p className="text-xs text-gray-500 mt-0.5">
              Marketing coordinator
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 fill-gray-500"
            viewBox="0 0 32 32"
          >
            <path
              d="M13 16c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0 10c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3-3 1.346-3 3zm0-20c0 1.654 1.346 3 3 3s3-1.346-3-3-3 1.346-3 3z"
              data-original="#000000"
            />
          </svg>
        </div> */}
      </div>
    </div>
  );
};

export default HotelCard;
