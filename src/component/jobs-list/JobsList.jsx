import React from "react";
import "./JobList.scss";
import JobItem from "../job-item/JobItem";
import data from "../../data/data.json";

export default function JobsList() {
  return (
    <section className="job-list">
      <div className="container">
        <ul className="jobs-list__list">
          {data.list &&
            data.list.map((item) => <JobItem key={item.id} {...item} />)}
        </ul>
      </div>
    </section>
  );
}
