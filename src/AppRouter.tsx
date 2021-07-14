import Dashboard from "components/Dashboard/Dashboard";
import NotFound from "components/NotFound";
import React from "react";
import { lazy } from "react";
import { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

const Portfolio = lazy(() => import("components/Portfolio/Portfolio"));

const AppRouter: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<NotFound />}>
        <Switch>
          <Route path="/" exact render={() => <Redirect to={`/dashboard`} />} />
          <Route component={Dashboard} path="/dashboard" exact />
          <Route component={Portfolio} path="/portfolio" exact />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRouter;
