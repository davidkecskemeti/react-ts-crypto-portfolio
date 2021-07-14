import { FieldArray } from "formik";

import CheckboxCard from "../../../views/CheckboxCard";

const descriptions: any = {
  bitcoin:
    "Bitcoin was the first cryptocurrency to successfully record transactions on a secure, decentralized blockchain-based network.",
  ethereum:
    "Ethereum is a decentralized computing platform which runs smart contracts and uses the Ether cryptocurrency built on top of the open source Ethereum blockchain",
};

const CryptoField = ({ crypto, selectedMarketplaces }: any) => {
  return (
    <FieldArray
      name={`marketplaces.${crypto.id}`}
      render={(arrayHelpers: any) => (
        <section>
          <section className="d-flex align-items-center">
            <div className="ml-4 d-flex">
              <img
                src={crypto.brand_url}
                alt={`${crypto.label} logo`}
                className="mr-6"
              />
              <b className="h6">{crypto.label}</b>
            </div>
          </section>
          <div className="w-100 mb-4 ml-3">
            {descriptions.hasOwnProperty(crypto.name) ? (
              <p className="text-muted small">{descriptions[crypto.name]}</p>
            ) : null}
          </div>

          <div className="d-flex mb-3">
            {crypto.marketplaces.map((marketplace: any, idx: any) => {
              const marketplaceSelected = selectedMarketplaces.includes(
                marketplace.id
              );

              return (
                <section className="mr-4 flex-1" key={idx}>
                  <CheckboxCard
                    checked={marketplaceSelected}
                    onChange={(e: any) => {
                      if (marketplaceSelected) {
                        arrayHelpers.remove(
                          selectedMarketplaces.indexOf(marketplace.id)
                        );
                      } else {
                        arrayHelpers.push(marketplace.id);
                      }
                    }}
                    label={marketplace.label}
                  >
                    <img src={marketplace.brand_url} alt="Marketplace logo" />
                  </CheckboxCard>
                </section>
              );
            })}
          </div>
        </section>
      )}
    />
  );
};

export default CryptoField;
