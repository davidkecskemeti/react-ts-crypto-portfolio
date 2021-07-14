import { Link } from "react-router-dom";
import styles from "../Dashboard/Dashboard.module.scss";

interface IMenuProps {}
const Dashboard: React.FC<IMenuProps> = () => {
  return (
    <div className={styles.container}>
      <section className={styles.card}>
        <Link to={`/portfolio`}>
          <button>Create new portfolio</button>
        </Link>
      </section>
    </div>
  );
};

export default Dashboard;
