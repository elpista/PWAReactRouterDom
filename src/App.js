import Home from "./pages/Home/Home.jsx";
import './App.css';
import { ROUTES } from './const/routes.js';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Home />,
  },
]);

//hacer el pathing
//hacer el fetch

function App() {
  return (
    <div className="App">
      <RouterProvider router = {router} />
    </div>
  );
}

export default App;
