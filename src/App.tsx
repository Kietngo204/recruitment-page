import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./view/Home";
import { Provider } from "react-redux";
import { store } from "./core/redux/store";
import Login from "./view/Auth/Login";
import ForgotPassword from "./view/Auth/ForgotPassword";
import AuthLayout from "./view/Auth";
import ResetPassword from "./view/Auth/ResetPassword";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/auth/*" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset-password" element={<ResetPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
