import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      {/* <header>
        
        
      </header> */}
      <div className='work'>
        <h1>Study Work Management</h1>
      </div>

      <section className="hero">
        <img src='https://wallpapercave.com/wp/wp9473464.jpg' alt='no picture'></img>
       
      </section>

      <section className="features">
        <div className="feature">
          <h2>Job Search</h2>
          <p>Search for jobs by keyword, location, and category</p>
        </div>
        <div className="feature">
          <h2>Job Postings</h2>
          <p>View and apply for job postings from top companies</p>
        </div>
        <div className="feature">
          <h2>Personalized Profile</h2>
          <p>Create and manage your profile to increase visibility</p>
          </div>
      </section>

      <section className="testimonials">
        <div className="testimonial">
          <p>"I found my dream job through this portal! Thank you!"</p>
          <h2>Abhiram</h2>
        </div>
        <div className="testimonial">
          <p>"This portal is user-friendly and efficient. Highly recommend!"</p>
          <h2>Lokesh</h2>
        </div>
      </section>

      <section className="call-to-action">
        <h2>Get Started Today!</h2>
        {/* <button>Register Now</button> */}
      </section>
      <footer>
        <p>&copy; 2024 Job Portal. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;


