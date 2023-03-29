import Badge from "../badge/Badge";
import "./JobItem.scss";

export default function JobItem({ ...props }) {
  return (
    <li className={`job-item ${props.isFeatured && "job-item--featured"}`}>
      <img
        className="job-item__img"
        src={props.img}
        alt={props.name}
        width="88"
        height="88"
      />
      <div className="job-item__info">
        <div className="job-item__company-badges">
          <h2 className="job-item__company">{props.name}</h2>
          {props.badges &&
            props.badges.map((item, i) => <Badge key={i} isNew={item.isNew} />)}
        </div>
        <h3 className="job-item__position">
          <a className="job-item__position-link" href="#">
            {props.position}
          </a>
        </h3>
        <ul className="job-item__addl">
          {props.additional &&
            props.additional.map((item, i) => (
              <li className="job-item__addl-item" key={i}>
                {item}
              </li>
            ))}
        </ul>
      </div>
      <div className="job-item__tags">
        {props.tags &&
          props.tags.map((item, i) => (
            <span key={i} className="job-item__tag tag">
              {item}
            </span>
          ))}
      </div>
    </li>
  );
}
