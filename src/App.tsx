import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./view/Home";
import { Provider } from "react-redux";
import { store } from "./core/redux/store";
import Login from "./view/Auth/Login";
import LoginLayout from "./view/Auth";
import ForgotPassword from "./view/Auth/ForgotPassword";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="/login" element={<LoginLayout />}>
            <Route index element={<Login />} />
            <Route path="/login/forgot-password" element={<ForgotPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
