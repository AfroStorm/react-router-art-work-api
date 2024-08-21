import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Error404,
  HomeLayout,
  Landing,
  SinglePageError,
  SingleArtWork,
  NewsLetter,
  About,
} from "./pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { loader as landingLoader } from "./pages/Landing";
import { loader as artWorkLoader } from "./pages/SingleArtWork";
import { action as newsLetterAction } from "./pages/NewsLetter";

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
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        loader: landingLoader(queryClient),
        element: <Landing />,
      },
      {
        path: "art-work/:id",
        errorElement: <SinglePageError />,
        loader: artWorkLoader(queryClient),
        element: <SingleArtWork />,
      },
      {
        path: "about",
        errorElement: <SinglePageError />,
        element: <About />,
      },
      {
        path: "newsletter",
        action: newsLetterAction,
        element: <NewsLetter />,
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
      {/* create newsletter page */}
    </>
  );
}

export default App;
