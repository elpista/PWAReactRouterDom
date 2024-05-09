import Home from "./pages/Home/Home.jsx";
import Detail from "./pages/Detail/Detail.jsx";
import { SearchPage }  from "./pages/SearchPage/SearchPage.jsx";
import './App.css';
import { ROUTES } from './const/routes.js';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { JuegoProvider } from "./Context/JuegoProvider.jsx";




const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Home />,
  },{
    path: ROUTES.detail,
    element: <Detail/>
  },{
    path: ROUTES.search,
    element: <SearchPage/>
  }

]);


function App() {
  return (
    <JuegoProvider>


    <div className="App">
      <header className="App-header">
        <RouterProvider router = {router} />
      </header>
    </div>
    </JuegoProvider>
  );
}

export default App;
