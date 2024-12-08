// import React, { useState } from 'react';
// import './ApplicationForm.css';
// import { useNavigate } from 'react-router-dom';


// const ApplicationForm = () => {
//   const [jobPosting, setJobPosting] = useState('');
//   const [studentName, setStudentName] = useState('');
//   const [studentEmail, setStudentEmail] = useState('');
//   const [applicationDate, setApplicationDate] = useState('');
//   const [showPopover, setShowPopover] = useState(false);


//   const navigate = useNavigate();



//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // API call to create student application
//     console.log('Form submitted:', {
//       jobPosting,
//       studentName,
//       studentEmail,
//       applicationDate,
//     });
//   };


//   setShowPopover(true);
//     setTimeout(() => {
//       setShowPopover(false); // Hide popover after 3 seconds
//       navigate('/'); // Redirect to the home page
//     }, 3000);
  


//   return (
//     <div className="container">
//       <h1>Application Form</h1>
//       <form onSubmit={handleSubmit} className="application-form">
//         <div className="form-group">
//           <label>Job Posting:</label>
//           <select
//             value={jobPosting}
//             onChange={(e) => setJobPosting(e.target.value)}
//           >
//             <option value="">Select Job Posting</option>
//             {/* Map through job postings */}
//             <option value="Job 1">Job 1</option>
//             <option value="Job 2">Job 2</option>
//             <option value="Job 3">Job 3</option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label>Student Name:</label>
//           <input
//             type="text"
//             value={studentName}
//             onChange={(e) => setStudentName(e.target.value)}
//           />
// </div>
//         <div className="form-group">
//           <label>Student Email:</label>
//           <input
//             type="email"
//             value={studentEmail}
//             onChange={(e) => setStudentEmail(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Application Date:</label>
//           <input
//             type="date"
//             value={applicationDate}
//             onChange={(e) => setApplicationDate(e.target.value)}
//           />
//         </div>
//         <button type="submit" className="submit-btn" onClick={() => navigate('/')}>
//           Apply
//         </button>
//       </form>

//       {showPopover && (
//         <div className="popover">
//           <div className="popover-content">
//             <h3>Application Submitted</h3>
//             <p>Your application has been successfully submitted!</p>
//           </div>
//         </div>
//       )}

//     </div>
//   );
// };

// export default ApplicationForm;



import React, { useState } from 'react';
import './ApplicationForm.css';
import { useNavigate } from 'react-router-dom';

const ApplicationForm = () => {
  const [jobPosting, setJobPosting] = useState('');
  const [studentName, setStudentName] = useState('');
  const [studentEmail, setStudentEmail] = useState('');
  const [applicationDate, setApplicationDate] = useState('');
  const [showPopover, setShowPopover] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Log form data
    console.log('Form submitted:', {
      jobPosting,
      studentName,
      studentEmail,
      applicationDate,
    });

    // Show the popover
    setShowPopover(true);

    // Auto-hide the popover and navigate after 3 seconds
    setTimeout(() => {
      setShowPopover(false);
      navigate('/'); // Redirect after successful submission
    }, 3000);
  };

  return (
    <div className="container">
      <h1>Application Form</h1>
      <form onSubmit={handleSubmit} className="application-form">
        <div className="form-group">
          <label>Job Posting:</label>
          <select
            value={jobPosting}
            onChange={(e) => setJobPosting(e.target.value)}
          >
            <option value="">Select Job Posting</option>
            <option value="Job 1">Job 1</option>
            <option value="Job 2">Job 2</option>
            <option value="Job 3">Job 3</option>
          </select>
        </div>
        <div className="form-group">
          <label>Student Name:</label>
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Student Email:</label>
          <input
            type="email"
            value={studentEmail}
            onChange={(e) => setStudentEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Application Date:</label>
          <input
            type="date"
            value={applicationDate}
            onChange={(e) => setApplicationDate(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-btn">
          Apply
        </button>
      </form>
      {showPopover && (
        <div className="popover">
          <div className="popover-content">
            <h3>Application Submitted</h3>
            <p>Your application has been successfully submitted!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicationForm;

