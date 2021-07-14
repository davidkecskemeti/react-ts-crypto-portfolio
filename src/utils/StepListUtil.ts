/**
 * Generates a list of steps for display by the steps component.
 *
 * This function returns a function that accepts a step object and returns
 * the object with extra properties.
 *
 * @param {Object} route
 * @returns {Function}
 */
export function generateStepsList({ route }: any) {
  const routeParams = route.params;
  const routeParamKeys = Object.keys(routeParams);
  // Swap out any dynamic routes with their param values so "/portfolio/:portfolioId" becomes "/portfolio/1"
  const replaceParams = (path: any, param: any) =>
    path.replace(`:${param}`, routeParams[param]);
  const createStepEntry = ({ path, label }: any) => {
    let routePath = routeParamKeys.length
      ? routeParamKeys.reduce(replaceParams, path)
      : path;
    let active = route.pathname === path;
    return {
      path: routePath,
      active,
      label,
    };
  };
  return createStepEntry;
}
