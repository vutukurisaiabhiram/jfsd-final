import React from 'react';
import './JobPostingList.css';
import { useNavigate } from 'react-router-dom';


const jobPostings = [

  {
    id: 1,
    title: 'Software Engineer',
    company: 'ABC Corporation',
    location: 'New York',
    description: 'Develop scalable software solutions',
  },
  {
    id: 2,
    title: 'Data Scientist',
    company: 'XYZ Startups',
    location: 'San Francisco',
    description: 'Analyze data to drive business decisions',
  },
  {
    id: 3,
    title: 'Product Manager',
    company: 'DEF Industries', // Removed extra space at the beginning
    location: 'Chicago',
    description: 'Lead product development and launch',
  },
];

const JobPostingList = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Job Posting List</h1>
      <ul className="job-listings">
        {jobPostings.map((job) => (
          <li key={job.id} className="job-listing"> {/* Use job.id as the key */}
            <h2>{job.title}</h2>
            <p>
              <span>Company:</span> {job.company}
            </p>
            <p>
              <span>Location:</span> {job.location}
            </p>
            <p>{job.description}</p>
            <button className="apply-btn" onClick={() => navigate('/ApplicationForm')} >Apply Now</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobPostingList;
