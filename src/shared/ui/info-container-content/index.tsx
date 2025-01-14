import classNames from "classnames";
import styles from "./info-container-content.module.css";

interface IInfoContainerContent {
  name?: string;
  id?: number;
  phone?: string;
  address?: string;
  extClassName?: string;
}

export const InfoContainerContent = ({
  name,
  id,
  phone,
  address,
  extClassName,
}: IInfoContainerContent) => (
  <div className={extClassName}>
    <p
      className={classNames(
        "m-0",
        "text_size_medium",
        "text_type_regular",
        "text",
        styles["info-name-wrapper"]
      )}
    >
      {name}
    </p>
    <p
      className={classNames(
        "m-0",
        "text_size_small",
        "text_type_regular",
        "text",
        styles["info-id-wrapper"]
      )}
    >
      ID {id}
    </p>
    <p
      className={classNames(
        "m-0",
        "text_size_small",
        "text_type_regular",
        "text",
        styles["info-phoneNumber-wrapper"]
      )}
    >
      <span
        className={classNames(
          "m-0",
          "text_size_small",
          "text_type_bold",
          "text"
        )}
      >
        Тел.: &nbsp;
      </span>
      {phone}
    </p>
    <p
      className={classNames(
        "m-0",
        "text_size_small",
        "text_type_regular",
        "text",
        styles["info-address-wrapper"]
      )}
    >
      <span
        className={classNames(
          "m-0",
          "text_size_small",
          "text_type_bold",
          "text"
        )}
      >
        Адрес: &nbsp;
      </span>
      {address}
    </p>
  </div>
);
