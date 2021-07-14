import { useEffect } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useFormikContext } from "formik";

import Steps from "../Steps";
import CryptoField from "./CryptoField";

import styles from "./../Portfolio.module.scss";
import { fetchAll } from "../../../utils/AxiosUtil";
import { IPortfolio } from "../Portfolio";

function SelectCrypto({ stepsList }: any) {
  const { values, setFieldValue } = useFormikContext<IPortfolio>();

  const {
    isLoading,
    error,
    data: cryptocurrencies,
  } = useQuery("cryptocurrencies", () => fetchAll("/crypto"));

  useEffect(() => {
    if (!Object.keys(values.marketplaces).length && cryptocurrencies) {
      let marketplaces = cryptocurrencies.reduce((acc: any, curr: any) => {
        return {
          ...acc,
          [curr.id]: curr.marketplaces.map(({ id }: any) => id),
        };
      }, {});

      setFieldValue("marketplaces", marketplaces);
    }
  }, [cryptocurrencies, setFieldValue, values.marketplaces]);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

  return (
    <div>
      <section className={styles.Section__Heading}>
        <h2 className={styles.Section__Heading__Title}>
          Select the crypto you wish to manage
        </h2>
        <p>Pick cryptocurrencies and choose exchanges to trade them on.</p>
      </section>

      <div className={styles.Steps__Container}>
        <Steps steps={stepsList} />
      </div>

      <section className={styles.Form__Card}>
        {cryptocurrencies.map((crypto: any, idx: any) => (
          <div className="mb-3" key={idx}>
            <CryptoField
              crypto={crypto}
              selectedMarketplaces={values.marketplaces ? [crypto.id] : []}
            />
          </div>
        ))}

        <div className={styles.Form__Button__Container}>
          <Link to={`/portfolio/create`} className="btn">
            <span className="chevron left" />
            Back
          </Link>
          <Link to={`/portfolio/create/add-keys`} className="btn btn-primary">
            Add Keys
            <span className="chevron right" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default SelectCrypto;
