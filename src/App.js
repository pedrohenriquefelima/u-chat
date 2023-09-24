import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import FeaturePage from "./pages/featuresPage/FeaturesPage";
import Root from "./pages/root/Root";

//every object represents one route
const router = createBrowserRouter([
  { path: '/', element: <Root/>, children: [
    { path: '/', element: <HomePage/>},
    { path: '/features', element: <FeaturePage/>}
  ]}
]);


function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
