import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rewir from "./pages/rewir/Rewir";
import Contact from "./pages/contact/Contact";
import Wnioski from "./pages/wnioski/Wnioski";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "rewir-komorniczy", element: <Rewir /> },
  { path: "kontakt", element: <Contact /> },
  { path: "wnioski", element: <Wnioski /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
