import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routes from './routes'

export interface CharacterData {
  // Define the structure of your character data here
  pageSize:number
  page:number
}

const queryClient = new QueryClient()
const router = createBrowserRouter(routes);

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col w-full min-h-screen bg-background bg-pattern">
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
    </>
  )
}

export { queryClient };
export default App
