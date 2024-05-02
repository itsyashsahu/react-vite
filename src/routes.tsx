import { RouteObject } from "react-router-dom";
import { Suspense, lazy } from "react";
import { LoadingCardFallback } from "./components/LoadingCard";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Character = lazy(() => import("./pages/Character"));
const Search = lazy(() => import("./pages/Search"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/gallery",
    element: (
      <Suspense fallback={<LoadingCardFallback />}>
        <Gallery />
      </Suspense>
    ),
  },
  {
    path: "/character/:id",
    element: (
      <Suspense fallback={<LoadingCardFallback />}>
        <Character />
      </Suspense>
    ),
  },
  {
    path: "/search",
    element: (
      <Suspense fallback={<LoadingCardFallback />}>
        <Search />
      </Suspense>
    ),
  },
];
export default routes;
