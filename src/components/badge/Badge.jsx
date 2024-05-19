import "./Badge.scss";

const Badge = ({ isNew }) => {
  return (
    <span className={`badge ${isNew ? "badge--new" : "badge--featured"}`}>
      {isNew ? "New!" : "Featured"}
    </span>
  );
};

export default Badge;
