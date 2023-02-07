import { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

import Main from "@layout/Main";
import { paths } from "@navigation/_exports";
import { ErrorWrapper, AuthWrapper } from "@wrappers/_exports";

// Public view components
export const LoginView = lazy(() => import("@resources/Auth/views/Login.view"));

// Routes controller
function App() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Switch>
        {/* Public routes */}
        <Route path={paths.error} name="Error" render={() => <>Error view</>} />

        <Route
          path={paths.login}
          name="Login"
          render={() => (
            <ErrorWrapper>
              <LoginView />
            </ErrorWrapper>
          )}
        />

        {/* Private routes */}
        <Route
          path="/"
          render={() => (
            <ErrorWrapper>
              <AuthWrapper>
                <Main />
              </AuthWrapper>
            </ErrorWrapper>
          )}
        />
      </Switch>
    </Suspense>
  );
}

export default App;
