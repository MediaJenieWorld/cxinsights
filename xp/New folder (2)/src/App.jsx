import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContext } from "./store/User_Context";
import { useContext, Suspense, lazy } from "react";
import Header from "./components/Header/header";
import NotFound from "./NotFound";

const LoginPage = lazy(() => import("./app/login/page"));
const DashboardPage = lazy(() => import("./app/dashboard/page"));
const MyInsightsPage = lazy(() => import("./app/dashboard/my_insights/page"));
const ActionsPage = lazy(() => import("./app/dashboard/my_actions_list/page"));
const ImplementationPage = lazy(() =>
  import("./app/dashboard/implemented/page")
);
const MyAction_Insight_View = lazy(() =>
  import("./app/dashboard/my_actions_list/Insight/Page")
);
const MyTodo_Insight_View = lazy(() =>
  import("./app/dashboard/implemented/Insight/Page")
);
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
          <Route path="/forgot_password" element={<ForgotPassword />} />
          <Route path="/forgot_password/:token" element={<NewPassword />} />
          {auth && (
            <>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route
                path="/dashboard/my_insights"
                element={<MyInsightsPage />}
              />
              <Route
                path="/dashboard/my_actions_list"
                element={<ActionsPage />}
              />
              <Route
                path="/dashboard/my_actions_list/:insightId"
                element={<MyAction_Insight_View />}
              />
              <Route
                path="/dashboard/implemented"
                element={<ImplementationPage />}
              />
              <Route
                path="/dashboard/implemented/:insightId"
                element={<MyTodo_Insight_View />}
              />
            </>
          )}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
