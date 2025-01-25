import React from "react";
import { Route, Routes } from "react-router-dom";
import Cookies from "js-cookie";
import { ROUTES } from "./global/routes";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import ComingSoon from "./pages/ComingSoon";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import FindJob from "./pages/FindJob";
import Resume from "./components/Resume";

const ProtectedRoute = ({ children }) => {
  const storedUser = Cookies.get("user");
  if (!storedUser) {
    return <Navigate to="/login" />;
  }
  const userData = JSON.parse(storedUser);
  return userData ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.RESUME} element={<Resume />} />
        <Route path={ROUTES.FORGOT_PASSWORD} element={<ComingSoon />} />
        <Route path={ROUTES.PROFILE} element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        {/* <Route path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}></Route> */}
        <Route path={ROUTES.FINDJOB} element={<FindJob />} />
      </Route>

      <Route path="*" element={<NotFound />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
    </Routes>
  );
}

export default App;
