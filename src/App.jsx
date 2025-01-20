import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Register from "./pages/Auth/Register";
import { ROUTES } from "./global/routes";

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
        {/* <Route path="login" element={<Login />} /> */}
        {/* <Route path="profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}></Route> */}
      </Route>

      {/* <Route path="*" element={<NotFound />} /> */}
      {/* <Route path="/error" element={<ErrorPage />} /> */}
      {/* <Route path="/coming-soon" element={<ComingSoon />} /> */}
    </Routes>
  );
}

export default App;
