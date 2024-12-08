import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Register from './components/Register';
import StudentDashboard from './components/StudentDashboard';
import EmployerDashboard from './components/EmployerDashboard';

import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import UserManagement from './components/AdminDashboard/UserManagement';
import Analytics from './components/AdminDashboard/Analytics';
import Settings from './components/AdminDashboard/Settings';

import { useState ,useEffect} from 'react';

import AddTask from './components/AddTask';
import Work from './components/Work';


import ApplicationForm from './components/ApplicationForm/ApplicationForm';
import JobPostingList from './components/JobPostingList/JobPostingList';
import Home from './components/Home';
import './App.css';




const App = () => {

  let initTodo;
  if(localStorage.getItem("todos")===null)
  {
    initTodo=[];
  }
  else
  {
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }



  const onDelete=(todo)=>{
    console.log("i am deleted",todo);

    setWork(work.filter((e)=>{
      return e!==todo;
    }));

  }

  const addTodo=(title,desc)=>{
    console.log("i am adding work",title,desc)
    let sno = work.length > 0 ? work[work.length - 1].sno + 1 : 1;
    const myTodo=
    {
      sno:sno,
      title:title,
      desc:desc,

    }
    setWork([...work,myTodo])
    console.log(myTodo)

  }

  const [work, setWork] = useState(initTodo);
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(work));
 
  },[work])




    return (

        <BrowserRouter>
          <Navigation />
          <div className="container">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home/>}/>
              <Route path="/job-postings" element={<JobPostingList />} />
              <Route path="/apply" element={<ApplicationForm />} />
              <Route path="/student-dashboard" element={<StudentDashboard />} />
              <Route path="/employer-dashboard" element={<EmployerDashboard />} />
              {/* <Route path="/admin-dashboard" element={<AdminDashboard />} /> */}
              <Route path="/applicationform" element={<ApplicationForm />} />
              <Route path="jobpostinglist" element={<JobPostingList />} />
              <Route path="login" element={<Login />} />
              <Route path="/register" element={<Register />} />

              
          <Route
          path="/AddTask"
          element={
            <>
              <AddTask addTodo={addTodo} />
              <Work work={work} onDelete={onDelete} />
            </>
          }
        />


            <Route path="/admin" element={<AdminDashboard />}>
          <Route path="user-management" element={<UserManagement />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
{/* 
          <Route
          path="/AddTask"
          element={
            <>
              <AddTask addTodo={addTodo} />
              <Work work={work} onDelete={onDelete} />
            </>
          }
        /> */}

        </Route>

            </Routes>
          </div>
        </BrowserRouter>
      );
    };
    
    export default App;
    
    