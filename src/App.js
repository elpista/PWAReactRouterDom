import Home from "./Components/Home/Home.jsx";
import style from './App.css';
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
      <Home/>
    </div>
  );
}

export default App;
