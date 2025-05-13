// import React, { useEffect } from "react";
// import { isExpired } from "react-jwt";
// import { useAuth } from "../context/auth";
// import { toast } from "react-toastify";
// import { BEFORE_LOGIN_ROUTES, ROUTES } from "../utilities/constants";
// import { useNavigate, Navigate } from "react-router-dom";

// export const PrivateRoutes = ({
// 	component: RouteComponent,
// 	route,
// }) => {

// 	const [auth] = useAuth();
// 	const navigate =  useNavigate();

// 	const authToken = localStorage.getItem("token");

// 	console.log("authToken====", authToken)

// 	useEffect(() => {
// 		if (authToken) sessionExpire();
// 	}, [authToken]);

// 	const sessionExpire = () => {
// 		const isMyTokenExpired = isExpired(authToken);

// 		console.log("isMyTokenExpired====", isMyTokenExpired)
// 		if (isMyTokenExpired) {
// 			localStorage.clear();
// 			toast.error("Token expired");
// 			navigate(ROUTES.LOGIN);
// 		}
// 	};

// 	// console.log("BEFORE_LOGIN_ROUTES.includes(route)=====",BEFORE_LOGIN_ROUTES.includes(route))

// 	let returnData;
// 	if (authToken) {
// 		if (BEFORE_LOGIN_ROUTES.includes(route)) {
// 			returnData = <Navigate to={ROUTES.DASHBOARD} />;
// 		} else returnData = <RouteComponent />;
// 	} else {
// 		console.log("helooooo inside else =====>>>>>")
// 		if (BEFORE_LOGIN_ROUTES.includes(route)) returnData = <RouteComponent />;
// 		else returnData = <Navigate to={ROUTES.LOGIN} />;
// 	}

// 	return returnData;
// };
