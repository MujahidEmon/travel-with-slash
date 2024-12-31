import { useState } from "react";


const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "/public/images/Rectangle 1.png",
    "/public/images/Sajek.png",
    "/public/images/Sreemongol.png",
    "/public/images/sundorbon.png",
    
  ];

  const places = [
    "COX'S BAZAR"," SAJEK", "SREEMONGOL", "SUNDORBON",
  ]

  const visibleSlides = 3;

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - visibleSlides : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - visibleSlides ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative mx-auto gap-6">
      {/* Carousel */}
      <div className="overflow-hidden fixed top-40">
        <div
          className="grid grid-flow-col w-full gap-4 transition-transform duration-500"
          style={{ transform: `translateX(-${activeIndex * 100 / visibleSlides}%)` }}
        >
          {images.map((src, index) => (
            <div key={index} className="hover:border-2 border-yellow-400 rounded-box carousel-item w-[217px] relative flex-shrink-0">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className=" object-cover rounded-box"
              />
              <div className="bg-black bg-opacity-30 rounded-box absolute inset-0">
                 <h1 className="text-white font-bebas text-3xl pl-4 mt-[278px]">{places[index]}</h1>
               
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center mt-4 absolute top-[440px] space-x-4">
        <button
          aria-label="Previous Slide"
          onClick={prevSlide}
          className="p-2 bg-gray-50 rounded-full shadow-md hover:bg-gray-200  focus:ring-offset-2 "
        >
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <button
          aria-label="Next Slide"
          onClick={nextSlide}
          className="p-2 bg-gray-50 rounded-full shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
