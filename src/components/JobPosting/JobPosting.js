import React from 'react';

const JobPosting = ({ job }) => {
  return (
    <div>
      <h2>{job.title}</h2>
      <p>{job.description}</p>
      <p>Employer: {job.employer}</p>
      <p>Location: {job.location}</p>
      <p>Start Date: {job.startDate}</p>
      <p>End Date: {job.endDate}</p>
    </div>
  );
};

export default JobPosting;
