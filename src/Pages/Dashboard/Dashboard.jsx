import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import HotelCard from "../../Components/HotelCard/HotelCard";

const Dashboard = () => {
    const hotels = useLoaderData();
    return (
        <div className="relative font-montserrat w-full ">
            <img
        src="/public/images/Rectangle 1.png"
        alt="Background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-65"></div>
      <div className="absolute inset-0 ">
        
            <Navbar></Navbar>
            
                <div className="max-w-6xl mt-8 mx-auto">
                    {
                        hotels.map((hotel, index) => <HotelCard hotel={hotel} key={index}></HotelCard>)
                    }
                </div>
                
        </div>
        </div>
    );
};

export default Dashboard;