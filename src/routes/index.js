import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home";
import HashPage from "../pages/Hash";
import SignInPage from "../pages/SignIn";
import SignUpPage from "../pages/SignUp";
import UserPage from "../pages/User";
import NotFoundPage from "../pages/NotFount";

export default function RouterProvider() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/timeline" element={<HomePage />} />
        <Route path="/hashtag/:hashtag" element={<HashPage />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
