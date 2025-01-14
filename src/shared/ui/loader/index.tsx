// eslint-disable-next-line import/no-extraneous-dependencies
import { FadeLoader } from "react-spinners";
import styles from "./styles.module.css";

export const Loader = () => (
  <div className={styles.loader__container}>
    <FadeLoader color="#2e3192" />
  </div>
);
