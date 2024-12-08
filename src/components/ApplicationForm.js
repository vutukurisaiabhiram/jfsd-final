import React from 'react';

const ApplicationForm = () => {
  return (
    <div>
      <h1>Application Form</h1>
      <form>
        <label>Name:</label>
        <input type="text" />
        <br />
        <label>Email:</label>
        <input type="email" />
        <br />
        <label>Phone:</label>
        <input type="phone" />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ApplicationForm;
