import { RouteObject } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Gallery from "./pages/Gallery"

const routes:RouteObject[] = [
    {
        path: "/",
        element: (<Dashboard />),
    },
    {
        path: "/gallery",
        element: (<Gallery />),
    }
]
export default routes