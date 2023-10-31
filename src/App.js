import {Provider} from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./shared/routes/routes";
import {store} from "./store/store";

function App() {
  return(
      <Provider store={store}>
          <RouterProvider router={createBrowserRouter(routes)} />
      </Provider>
  )
}

export default App;
