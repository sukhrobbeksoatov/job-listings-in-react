import React from "react";

import { JobItem } from "..";
import list from "../../data/data.json";

import "./JobList.scss";

const JobsList = () => {
  return (
    <section className="job-list">
      <div className="container">
        <ul className="jobs-list__list">
          {!!list.length && list.map(item => <JobItem key={item.id} {...item} />)}
        </ul>
      </div>
    </section>
  );
};

export default JobsList;
