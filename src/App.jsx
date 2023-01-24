import { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import Main from "@layout/Main";
import { paths } from "@/navigation/navigation.exports";
import { ErrorWrapper, AuthWrapper } from "@/wrappers/wrappers.exports";

// Routes controller
function App() {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Switch>
        {/* Public routes */}
        <Route path={paths.error} name="Error" render={() => <>Error view</>} />

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
