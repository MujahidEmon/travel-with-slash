import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import HotelCard from "../../Components/HotelCard/HotelCard";


const Dashboard = () => {
    const hotels = useLoaderData();
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="w-7/12">
                    {
                        hotels.map((hotel, index) => <HotelCard hotel={hotel} key={index}></HotelCard>)
                    }
                </div>
                <div className="w-5/12">

                </div>
            </div>
        </div>
    );
};

export default Dashboard;