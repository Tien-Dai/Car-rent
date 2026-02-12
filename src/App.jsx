import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import CarDetail from "./pages/CarDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RentalPage from "./pages/RentalPage";

const PrivateRoute = () => {
  const isAuth = localStorage.getItem("isAuth");
  return isAuth === "true" ? <Outlet /> : <Navigate to="/login" replace />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route element={<MainLayout />}>

            <Route path="/" element={<Home />} />
            <Route path="/cars" element={<Cars />} />

            
            <Route path="/cars/:id" element={<CarDetail />} />
            <Route path="/rent/:id" element={<RentalPage />} />

          </Route>

        </Route>

        <Route path="*" element={<Navigate to="/login" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
