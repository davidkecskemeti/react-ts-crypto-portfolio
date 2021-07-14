import { lazy } from "react";

const AddName = lazy(() => import("../components/Portfolio/AddName/AddName"));
const SelectCrypto = lazy(
  () => import("../components/Portfolio/SelectCrypto/SelectCrypto")
);
const AddKeys = lazy(() => import("../components/Portfolio/AddKeys/AddKeys"));

const stepsComposer = ({ url }: any) => [
  {
    path: `${url}/create/add-name`,
    Component: AddName,
    label: "Add Name",
  },
  {
    path: `${url}/create/select-crypto`,
    Component: SelectCrypto,
    label: "Select Crypto",
  },
  {
    path: `${url}/create/add-keys`,
    Component: AddKeys,
    label: "Add Keys",
  },
];

export default stepsComposer;
