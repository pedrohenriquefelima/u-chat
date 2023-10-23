import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import FeaturePage from "./pages/featuresPage/FeaturesPage";
import Root from "./pages/root/Root";
import DownloadPage from "./pages/dowloadPage/DownloadPage";
import CommunityPage from "./pages/communityPage/CommunityPage";
import LoginPage from "./pages/loginPage/LoginPage";
import SignUpPage from "./pages/signUpPage/SignUpPage";
import ErrorPage from "./pages/errorPage/ErrorPage";

//every object represents one route
//react can deal with dynamic paths
//by adding a semicolon to the path /community/:id
//the component receiving this route can use the useParams hook
//the routes below use a relative path (absolute path starts with /)
//relative vs route property on NavLink

const router = createBrowserRouter([
  { path: '/', 
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
    { path: '', element: <HomePage/>},
    { path: 'download', element: <DownloadPage/>},
    { path: 'community', element: <CommunityPage/>},
    { path: 'features', element: <FeaturePage/>},
    { path: 'login', element: <LoginPage/>},
    { path: 'signup', element: <SignUpPage/>}
  ]}
]);

function App() {

  
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
