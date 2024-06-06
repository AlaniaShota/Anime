// // AuthPage.js
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { authenticateUser } from "../redux/reducer/reducer";

// export const AuthPage = () => {
//   const dispatch = useDispatch();
//   const accessToken = useSelector((state) => state.auth.accessToken);
//   const isLoading = useSelector((state) => state.auth.isLoading);
//   const error = useSelector((state) => state.auth.error);

//   useEffect(() => {
//     dispatch(
//       authenticateUser({
//         clientId:
//           "dd031b32d2f56c990b1425efe6c42ad847e7fe3ab46bf1299f05ecd856bdb7dd",
//         clientSecret:
//           "54d7307928f63414defd96399fc31ba847961ceaecef3a5fd93144e960c0e151",
//       })
//     );
//   }, [dispatch]);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }
// // 
//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       {accessToken ? (
//         <div>
//           <p>Authentication successful!</p>
//          <Home/>
//         </div>
//       ) : (
//         <div>
//           <p>Authentication failed.</p>
//           {/* Дополнительные действия в случае ошибки аутентификации */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AuthPage;
