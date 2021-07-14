import React, { Suspense } from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
} from "react-router-dom";
import { Formik } from "formik";
import { useMutation } from "react-query";
import styles from "./Portfolio.module.scss";
import NotFound from "components/NotFound";
import AddName from "./AddName/AddName";
import SelectCrypto from "./SelectCrypto/SelectCrypto";
import AddKeys from "./AddKeys/AddKeys";

export interface IMarketplace {
  vendorsList: string[];
}
export interface IPortfolio {
  portfolioName: string;
  marketplaces: IMarketplace[];
  secrets: any;
}
const initialFormValues: IPortfolio = {
  portfolioName: "",
  marketplaces: [],
  secrets: {},
};

const portfolioCreationRequest = async (payload: IPortfolio) => {
  console.log(JSON.stringify(payload));

  setTimeout(() => Promise.resolve("success"), 3000);
};

interface IPortfolioProps {
  history: RouteComponentProps["history"];
  location: RouteComponentProps["location"];
  match: RouteComponentProps["match"];
}
const Portfolio: React.FC<IPortfolioProps> = ({ history, location, match }) => {
  const mutation = useMutation(portfolioCreationRequest, {
    onSuccess: () => {
      history.push(`/dashboard`);
    },
  });

  const handleFormSubmit = (values: IPortfolio) => {
    const { portfolioName, marketplaces, secrets } = values;
    const payload = {
      portfolioName,
      marketplaces,
      secrets,
    };

    mutation.mutate(payload);
  };

  return (
    <div className={styles.Portfolio__Container}>
      <Formik<IPortfolio>
        initialValues={initialFormValues}
        onSubmit={handleFormSubmit}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <BrowserRouter>
              <Suspense fallback={<NotFound />}>
                <Switch>
                  <Route
                    path="/portfolio"
                    exact
                    render={() => <Redirect to={`${match.url}/create`} />}
                  />
                  <Route
                    exact
                    path={`${match.url}/create`}
                    render={() => (
                      <Redirect to={`${match.url}/create/add-name`} />
                    )}
                  />
                  <Route
                    exact
                    path={`${match.url}/create/add-name`}
                    component={AddName}
                  />
                  <Route
                    exact
                    path={`${match.url}/create/select-crypto`}
                    component={SelectCrypto}
                  />
                  <Route
                    exact
                    path={`${match.url}/create/add-keys`}
                    component={AddKeys}
                  />
                  <Route component={NotFound} />
                </Switch>
              </Suspense>
            </BrowserRouter>
          </form>
        )}
      </Formik>
    </div>
  );
};

// const AddName = lazy(() => import("../components/Portfolio/AddName"));
// const SelectCrypto = lazy(() => import("../components/Portfolio/SelectCrypto"));
// const AddKeys = lazy(() => import("../components/Portfolio/AddKey"));

// const stepsComposer = ({ url }: any) => [
//   {
//     path: `${url}/create/add-name`,
//     Component: AddName,
//     label: "Add Name",
//   },
//   {
//     path: `${url}/create/select-crypto`,
//     Component: SelectCrypto,
//     label: "Select Crypto",
//   },
//   {
//     path: `${url}/create/add-keys`,
//     Component: AddKeys,
//     label: "Add Keys",
//   },
// ];

export default Portfolio;
