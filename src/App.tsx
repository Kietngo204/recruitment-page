import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./view/Home";
import { Provider } from "react-redux";
import { store } from "./core/redux/store";
import Login from "./view/Auth/Login";
import ForgotPassword from "./view/Auth/ForgotPassword";
import AuthLayout from "./view/Auth";
import ResetPassword from "./view/Auth/ResetPassword";
import Test from "./view/Examination/Test";
import Page404 from "./view/Page404";
import Examination from "./view/Examination";
import ReportProcess from "./view/Examination/ReportProcess";
import ProtectedRoute from "./routers/ProtectedRoute";
import InfoRegister from "./view/InfoRegister";
import NotFoundJob from "./view/Home/NotFoundJob";
import JobList from "./view/JobList";
import Register from "./view/Auth/Register";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />}>
              <Route index element={<NotFoundJob />} />
              <Route path="/job-list" element={<JobList />} />
            </Route>
            <Route path="/info-register/:role" element={<InfoRegister />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/test" element={<Examination />} />
              <Route path="/test/:subj" element={<Test />} />
              <Route path="/learnProcess" element={<ReportProcess />} />
            </Route>
          </Route>
          <Route path="/auth/*" element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset-password" element={<ResetPassword />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
