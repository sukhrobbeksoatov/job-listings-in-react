import "./Badge.scss";

export default function Badge({ isNew }) {
  return (
    <span className={`badge ${isNew ? "badge--new" : "badge--featured"}`}>
      {isNew ? "New!": "Featured"}
    </span>
  );
}
