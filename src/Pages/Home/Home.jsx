import Carousel from "../../Components/Carousel";
import Navbar from "../../Components/Navbar/Navbar";

const Home = () => {
  return (
	<div className="relative w-full h-screen">
      <img
        src="/public/images/Rectangle 1.png"
        alt="Background"
        className="w-full h-full object-cover"
		/>
      <div className="absolute inset-0 bg-black bg-opacity-65"></div>
	  <div className="absolute inset-0 ">
		<Navbar></Navbar>

    <div className="flex max-w-7xl mx-auto">
      <div className="w-5/12 text-white space-y-5 p-5 flex-col flex mt-40 justify-center ">
	  	<h1 className="font-bebas text-6xl">Cox's bazar</h1>
		<p>Cox's Bazar is a city, fishing port, tourism centre and district headquarters in southeastern Bangladesh. It is famous mostly for its long natural sandy beach , and it ...</p>
		<button className="btn bg-[#F9A51A] border-none w-fit">Booking</button>
	  </div>
      <div className="w-7/12  shadow-lg ">
		<Carousel></Carousel>
      </div>
    </div>
	  </div>
	</div>
	
  );
};

export default Home;
