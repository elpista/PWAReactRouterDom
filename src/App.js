import Home from "./pages/Home/Home.jsx";
import Detail from "./pages/Detail/Detail.jsx";
import './App.css';
import { ROUTES } from './const/routes.js';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Home />,
  },{
    path: ROUTES.detail,
    element: <Detail/>
  }
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
