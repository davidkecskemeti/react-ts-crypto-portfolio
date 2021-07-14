import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { generateStepsList } from "../utils/StepListUtil";

interface IStep {
  path: string;
}

interface IPortfolioProps {
  location: RouteComponentProps["location"];
  match: RouteComponentProps["match"];
}

interface IEnhancedRoute {
  ChildComp: JSX.Element;
  // step: React.ReactChild;
  // steps: IStep[];
  // props: IPortfolioProps;
}

// const EnhancedRoute: React.FC<IEnhancedRoute> = (props) => {
//   // const { ChildComp } = props;
//   // // const stepsList = steps.map(
//   // //   generateStepsList({
//   // //     route: { pathname, ...match },
//   // //   })
//   // // );
//   //  <ChildComp />
//   // // return <step {...props} stepsList={stepsList} />;
// };

// export default EnhancedRoute;
