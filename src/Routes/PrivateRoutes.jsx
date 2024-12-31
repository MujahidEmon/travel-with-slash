import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";
import PropTypes from 'prop-types';

const PrivateRoutes = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation();
    if(loading){
        return <HashLoader></HashLoader>
    }

    if (user){
        return children;
    }
    return <Navigate state={location.pathname} to={'/Login'}></Navigate>
};
PrivateRoutes.propTypes = {
    children: PropTypes.element
}
export default PrivateRoutes;