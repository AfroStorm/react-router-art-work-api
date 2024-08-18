import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { HomeLayout, Landing } from "./pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { loader as landingLoader } from "./pages/Landing";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        loader: landingLoader(queryClient),

        element: <Landing />,
      },
      {
        path: "art-work",
        element: <h2>art work</h2>,
      },
      {
        path: "about",
        element: <h2>about</h2>,
      },
      {
        path: "newsletter",
        element: <h2>newsletter</h2>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      {/* try to successfully fetch the artwork data from the api  */}
      {/* pass the searchTerm from landing.jsx into the searchBar.jsx */}
      {/* create a artWorkList.jsx and display the artwork in cards that lead to a single art work */}
    </>
  );
}

export default App;
