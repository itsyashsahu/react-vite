import { RouteObject } from "react-router-dom"
import { Suspense, lazy } from 'react';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Character = lazy(() => import('./pages/Character'));
const Search = lazy(() => import('./pages/Search'));

const routes: RouteObject[] = [
    {
        path: "/",
        element: (<Dashboard />),
    },
    {
        path: "/gallery",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <Gallery />
            </Suspense>
        ),
    },
    {
        path: "/character/:id",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <Character />
            </Suspense>
        ),
    },
    {
        path: "/search",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <Search />
            </Suspense>
        ),
    }
]
export default routes;
