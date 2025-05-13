// import React, { Suspense } from "react";
// import { Route, Routes } from "react-router-dom";
// import Header from "../components/Header";

// import DashBoard from "../pages/DashBoard";

// import { PrivateRoutes } from "./PrivateRoute";

// import { ROUTES } from "../utilities/constants";
// import About from "../pages/About";
// import Vehicle from "../pages/Vehicle";
// import Enquiry from "../pages/Enquiry";
// import Contact from "../pages/Contact";

// // import Footer from "../components/Footer";

// const PublicRoutes = () => {
//   return (
//     <>
//     <Header />
//       <Suspense fallback={<p>Loading...</p>}>
//         <Routes>
//           <Route
//             path={ROUTES.HOME}
//             element={
//               <PrivateRoutes component={DashBoard} route={ROUTES.HOME} />
//             }
//           />
//           <Route
//             path={ROUTES.DASHBOARD}
//             element={
//               <PrivateRoutes component={DashBoard} route={ROUTES.DASHBOARD} />
//             }
//           />
//           <Route
//             path={ROUTES.ABOUT}
//             element={
//               <PrivateRoutes component={About} route={ROUTES.ABOUT} />
//             }
//           />
//           <Route
//             path={ROUTES.VEHICLE}
//             element={
//               <PrivateRoutes component={Vehicle} route={ROUTES.VEHICLE} />
//             }
//           />
//           <Route
//             path={ROUTES.ENQUIRY}
//             element={
//               <PrivateRoutes component={Enquiry} route={ROUTES.ENQUIRY} />
//             }
//           />
//            <Route
//             path={ROUTES.CONTACT}
//             element={
//               <PrivateRoutes component={Contact} route={ROUTES.CONTACT} />
//             }
//           />
//         </Routes>
//         {/* <Footer /> */}
//       </Suspense>
//       {/* </Header> */}
//     </>
//   );
// };

// export default PublicRoutes;
