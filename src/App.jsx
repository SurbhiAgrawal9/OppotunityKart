import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
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
import Companies from "./pages/Companies";
import Resume from "./components/Resume";
import { message } from "antd";

// Admin Pages
import AdminDashboard from "./pages/RecruiterDashboard";
import JobPostings from "./pages/RecruiterDashboard/JobPostings";
import AddPost from "./pages/RecruiterDashboard/JobPostings/AddPost";

const ProtectedRoute = ({ role, children }) => {
  const storedUser = Cookies.get("user");
  if (!storedUser) {
    return <Navigate to="/login" />;
  }
  const userData = JSON.parse(storedUser);
  if (role && userData.role !== role) {
    console.log("my role : ", userData.role);
    console.log("your role : ", role)
    message.info(`Access denied. You are not a ${role}.`);
    return <Navigate to="/login" />;
  }
  return userData ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.JOBS} element={<FindJob />} />
        <Route path={ROUTES.COMPANIES} element={<Companies />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.RESUME} element={<Resume />} />
        <Route path={ROUTES.FORGOT_PASSWORD} element={<ComingSoon />} />
        <Route path={ROUTES.PROFILE} element={<ProtectedRoute role="jobseeker"><Profile /></ProtectedRoute>} />
      </Route>
      <Route path={ROUTES.ADMIN_PANEL} element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} errorElement={<ErrorPage />}>
        <Route path={ROUTES.ADMIN_JOB_POSTINGS} element={<JobPostings />} />
        <Route path={ROUTES.ADMIN_JOB_CREATE} element={<AddPost />} />
      </Route>

      <Route path="*" element={<NotFound />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
    </Routes>
  );
}

export default App;
