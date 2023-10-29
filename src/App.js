import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./shared/routes/routes";

function App() {
  return (
    <div>
      <RouterProvider router={createBrowserRouter(routes)} />
    </div>
  );
}

export default App;
