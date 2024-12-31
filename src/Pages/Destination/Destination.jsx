import Navbar from "../../Components/Navbar/Navbar";

const Destination = () => {
  return (
    <div className="relative font-montserrat w-full h-screen">
      <img
        src="/public/images/Rectangle 1.png"
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-65"></div>
      <div className="absolute inset-0 ">
        <Navbar></Navbar>

        <div className="flex gap-10 max-w-7xl mx-auto">
          <div className="w-2/3 text-white space-y-5 p-5 flex-col flex mt-30 justify-center ">
            <h1 className="font-bebas text-6xl">Cox's bazar</h1>
            <p>
              Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s
              known for its very long, sandy beachfront, stretching from Sea
              Beach in the north to Kolatoli Beach in the south. Aggameda Khyang
              monastery is home to bronze statues and centuries-old Buddhist
              manuscripts. South of town, the tropical rainforest of Himchari
              National Park has waterfalls and many birds. North, sea turtles
              breed on nearby Sonadia Island.
            </p>
            {/* <button className="btn bg-[#F9A51A] border-none w-fit">Booking</button> */}
          </div>

          <div className="w-1/3 bg-base-100 mt-16 p-9">
            <form className="">
              <h3 className="text-xl font-bold text-[#F9A51A] mb-5 text-center">
                Select Your Destination
              </h3>
              <div className="space-y-3">
                <div>
                  <label htmlFor="origin" className="font-semibold ">
                    Origin
                  </label>
                  <input
                    name="origin"
                    type="text"
                    className="bg-gray-100 mt-2 mb-3 w-full text-sm text-gray-800 px-4 py-4 focus:bg-transparent outline-[#F9A51A] transition-all"
                    placeholder="Origin"
                  />
                </div>
                <div>
                  <label htmlFor="destination" className="font-semibold ">
                    Destination
                  </label>
                  <input
                    name="destination"
                    type="text"
                    className="bg-gray-100 w-full text-sm mt-2 text-gray-800 px-4 py-4 focus:bg-transparent outline-orange-300 transition-all"
                    placeholder="Destination"
                  />
                </div>
                <div className="flex gap-3">
                    <div>
                        <label htmlFor="start-date" className="font-semibold">From</label>
                        <input
                            name="start-date"
                            type="date"
                            className="bg-gray-100 mt-2 w-full text-sm text-gray-800 px-4 py-4 focus:bg-transparent outline-orange-300 transition-all"
                            placeholder="Enter password"
                        />
                    </div>
                    <div>
                        <label htmlFor="end-date" className="font-semibold">To</label>
                        <input
                            name="end-date"
                            type="date"
                            className="bg-gray-100 mt-2 w-full text-sm text-gray-800 px-4 py-4 focus:bg-transparent outline-orange-300 transition-all"
                            placeholder="Enter confirm password"
                        />
                    </div>
                </div>
               
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  className="w-full py-4 px-8 text-sm tracking-wide font-semibold text-white bg-[#F9A51A] hover:bg-orange-600 focus:outline-none"
                >
                  Start Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
