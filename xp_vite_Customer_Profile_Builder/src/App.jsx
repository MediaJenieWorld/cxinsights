import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContext } from "./store/User_Context";
import { useContext, Suspense, lazy } from "react";
import Header from "./components/Header/header";
import NotFound from "./NotFound";

const Subscription = lazy(() => import("./app/dashboard/Subscription/Subscription"));
const LoginPage = lazy(() => import("./app/login/page"));
const DashboardPage = lazy(() => import("./app/dashboard/page"));
const ForgotPassword = lazy(() => import("./app/verify/ForgotPassword"));
const NewPassword = lazy(() => import("./app/verify/newPasswordForm"));

const App = () => {
  const { auth } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Header auth={auth} />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          {!auth &&
            <>
              <Route path="/forgot_password" element={<ForgotPassword />} />
              <Route path="/forgot_password/:token" element={<NewPassword />} />
            </>
          }
          {auth && (
            <>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/dashboard/subscription" element={<Subscription />} />
            </>
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
