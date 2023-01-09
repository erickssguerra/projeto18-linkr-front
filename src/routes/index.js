import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/Home";
import HashPage from "../pages/Hash";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";
import UserPage from "../pages/User";
import NotFoundPage from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SignInPage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/sign-up',
    element: <SignUpPage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/timeline',
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/hashtag/:hashtag',
    element: <HashPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/user/:id',
    element: <UserPage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '*',
    element: <NotFoundPage />,
    errorElement: <NotFoundPage />
  }
]);
