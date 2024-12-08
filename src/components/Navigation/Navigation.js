import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/job-postings">Job Postings</Link>
        </li>
        <li>
          <Link to="/student-dashboard">Student Dashboard</Link>
        </li>
        <li>
          <Link to="/employer-dashboard">Employer Dashboard</Link>
        </li>
        <li>
        <Link to="/admin-dashboard">Admin Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
