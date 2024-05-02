import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routes from './routes'
import { Helmet } from 'react-helmet';
import Config from './config';


const queryClient = new QueryClient()
const router = createBrowserRouter(routes);

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Cartoonify</title>
          <link rel="canonical" href={`${Config.FRONTEND_URL}/`} />
          <link rel="icon" type="image/png" href="logo.ico" sizes="16x16" />
      </Helmet>
      <div className="flex flex-col w-full min-h-screen bg-background bg-pattern">
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
    </>
  )
}

export { queryClient };
export default App
