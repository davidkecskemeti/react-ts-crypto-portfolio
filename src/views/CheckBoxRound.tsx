import styles from "./CheckboxRound.module.scss";

const CheckboxRound = (props: any) => {
  return (
    <div className={styles.CheckboxRound}>
      <input type="checkbox" {...props} />
      <label htmlFor={props.id}></label>
    </div>
  );
};

CheckboxRound.defaultProps = {};

export default CheckboxRound;
