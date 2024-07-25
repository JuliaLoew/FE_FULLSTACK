import Create from './Components/Create';
import Details from './Components/Details';
import Home from './Components/Home';
import MainLayout from './Components/MainLayout';

import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from "react-router-dom";


const router = createBrowserRouter(createRoutesFromElements(
  <Route path="" element={<MainLayout />}>
    <Route index element={<Home />} />
    <Route path="Create" element={<Create />} />
    <Route path="posts/:id" element={<Details/>} />

  </Route>

));
function App() {
return (

<div className="flex flex-col min-h-screen">

<RouterProvider router={router} />
</div>

);
}

export default App;
