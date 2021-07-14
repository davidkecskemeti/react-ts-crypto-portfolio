import CheckboxRound from "../views/CheckBoxRound";
import styles from "./CheckboxCard.module.scss";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

const CheckboxCard = ({ children, onChange, label, ...props }: any) => {
  return (
    <div
      className={cx({
        CheckboxCard: true,
        CheckboxCard__checked: props.checked,
      })}
      onClick={onChange}
    >
      <section className="d-flex flex-direction-reverse pr-4 pt-4">
        <CheckboxRound onChange={onChange} {...props} />
      </section>
      <div className="d-flex flex-direction-column align-items-center justify-content-center py-2 px-3">
        {children}
        <p>{label}</p>
      </div>
    </div>
  );
};

CheckboxCard.defaultProps = {};

export default CheckboxCard;
