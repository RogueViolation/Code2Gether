import { CSVPaginated } from "./components/CSV Paginated";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
      path: '/CSVPaginated',
      element: <CSVPaginated />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  }
];

export default AppRoutes;
