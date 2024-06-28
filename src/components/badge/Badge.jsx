import cx from "classnames";

import "./Badge.scss";

const Badge = ({ isNew }) => {
  return (
    <span className={cx("badge", isNew ? "badge--new" : "badge--featured")}>
      {isNew ? "New!" : "Featured"}
    </span>
  );
};

export default Badge;
