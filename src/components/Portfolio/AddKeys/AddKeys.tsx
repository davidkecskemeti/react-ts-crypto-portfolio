import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { fetchAll } from "../../../utils/AxiosUtil";
import { useFormikContext } from "formik";
import styles from "./../Portfolio.module.scss";
import MarketplaceKeyField from "./MarketplaceKeyField";
import { IPortfolio } from "../Portfolio";

interface IAddKeysProps {}
const AddKeys: React.FC<IAddKeysProps> = () => {
  const [selectedMarketplaces, setSelectedMarketplaces] = useState<any[]>();

  const {
    isLoading,
    error,
    data: marketplacesList = [],
  } = useQuery("marketplaces", () => fetchAll("/marketplaces"));

  const marketplaces = marketplacesList.reduce(
    (acc: any, curr: any) => ({
      ...acc,
      [curr.id]: curr,
    }),
    {}
  );

  const { values } = useFormikContext<IPortfolio>();

  useEffect(() => {
    const selectedMarketplaces: any[] = [
      ...new Set(
        Object.values(values.marketplaces).reduce(
          (vendorsList: any[], vendor: any) => [...vendorsList, ...vendor],
          []
        )
      ),
    ];

    setSelectedMarketplaces(selectedMarketplaces);
  }, [values.marketplaces]);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

  console.log(JSON.stringify(marketplaces));

  return (
    <div>
      <section className={styles.Section__Heading}>
        <h2 className={styles.Section__Heading__Title}>
          Take control with your keys.
        </h2>
        <p>Adding your keys allows you more control over integrations.</p>
      </section>

      {/* <div className={styles.Steps__Container}>
        <Steps steps={stepsList} />
      </div> */}

      <section className={styles.Form__Card}>
        {selectedMarketplaces?.map((marketplaceId: any, idx: any) => (
          <div className="mb-4" key={idx}>
            <MarketplaceKeyField marketplace={marketplaces[marketplaceId]} />
          </div>
        ))}
        <div className={styles.Form__Button__Container}>
          <Link to={`/portfolio/create/select-crypto`} className="btn">
            <span className="chevron left" />
            Back
          </Link>
          <button
            type="submit"
            className="btn btn-sm btn-primary font-weight-bold"
          >
            Submit
            <span className="chevron right" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default AddKeys;
