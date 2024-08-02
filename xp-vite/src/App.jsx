import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContext } from "./store/User_Context";
import { useContext, Suspense, lazy } from "react";
import Header from "./components/Header/header";
import NotFound from "./NotFound";
import MainDashboard from "./app/dashboard/MainDashboard";
import CustomerprofileDashboardPage from "./app/dashboard/Clueberry/page";

const Subscription = lazy(() => import("./app/dashboard/Subscription/Subscription"));
const UserProfilePage = lazy(() => import("./app/dashboard/profile/page"));
const LoginPage = lazy(() => import("./app/login/page"));
const ZensightDashboardPage = lazy(() => import("./app/dashboard/Zensight/page"));
const MyInsightsPage = lazy(() => import("./app/dashboard/Zensight/my_insights/page"));
const ActionsPage = lazy(() => import("./app/dashboard/Zensight/my_actions_list/page"));
const ImplementationPage = lazy(() =>
  import("./app/dashboard/Zensight/implemented/page")
);
const MyAction_Insight_View = lazy(() =>
  import("./app/dashboard/Zensight/my_actions_list/Insight/Page")
);
const MyTodo_Insight_View = lazy(() =>
  import("./app/dashboard/Zensight/implemented/Insight/Page")
);
const ForgotPassword = lazy(() => import("./app/verify/ForgotPassword"));
const NewPassword = lazy(() => import("./app/verify/newPasswordForm"));

const UpdateProfilePage = lazy(() => import("./app/dashboard/profile/update/UpdateProfilePage"));

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
              <Route path="/dashboard" element={<MainDashboard />} />
              <Route path="/dashboard/Zensight" element={<ZensightDashboardPage />} />
              <Route
                path="/dashboard/Zensight/my_insights"
                element={<MyInsightsPage />}
              />
              <Route
                path="/dashboard/Zensight/my_actions_list"
                element={<ActionsPage />}
              />
              <Route
                path="/dashboard/Zensight/my_actions_list/:insightId"
                element={<MyAction_Insight_View />}
              />
              <Route
                path="/dashboard/Zensight/implemented"
                element={<ImplementationPage />}
              />
              <Route path="/dashboard/subscription" element={<Subscription />} />
              <Route path="/dashboard/profile" element={<UserProfilePage />} />
              <Route path="/dashboard/profile/update" element={<UpdateProfilePage />} />
              <Route
                path="/dashboard/Zensight/implemented/:insightId"
                element={<MyTodo_Insight_View />}
              />
              <Route path="/dashboard/Clueberry" element={<CustomerprofileDashboardPage />} />
            </>
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
