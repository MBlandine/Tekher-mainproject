// import { Navigate, Outlet } from "react-router-dom";

// const ProtectedRoute = ({ allowedRoles }) => {
//     const userRole = localStorage.getItem("userRole"); // Get role from localStorage

//     if (!userRole) {
//         return <Navigate to="/login" replace />; // Redirect if not logged in
//     }

//     if (!allowedRoles.includes(userRole)) {
//         return <Navigate to="/unauthorized" replace />; // Redirect if role is not allowed
//     }

//     return <Outlet />; // Render child components if role is allowed
// };

// export default ProtectedRoute;
