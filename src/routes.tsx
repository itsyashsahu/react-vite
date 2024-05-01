import { RouteObject } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Gallery from "./pages/Gallery"
import Character from "./pages/Character"
import Search from "./pages/Search"

const routes:RouteObject[] = [
    {
        path: "/",
        element: (<Dashboard />),
    },
    {
        path: "/gallery",
        element: (<Gallery />),
    },
    {
        path: "/character/:id",
        element: (<Character />),
    },
    {
        path: "/search",
        element: (<Search />),
    }
]
export default routes