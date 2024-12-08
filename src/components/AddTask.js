import React, { useState } from 'react'


export default function AddTask({addTodo}) {
  const[title,setTitle]=useState("");
  const[desc,setDesc]=useState("");

  const submit=(e)=>
  {
    e.preventDefault()
    if(!title || !desc)
    {
      alert("title or description is empty");
    }
    else
    {
    addTodo(title,desc);
    setTitle("");
    setDesc("");
    }
  }
  return (
    <>
    <div className="container">
    <form onSubmit={submit}>
    <h3>Add Tasks</h3>

  <div className="form-group">
    <label htmlFor="title">Add Title</label>
    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="desc">Add Description</label>
    <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)} className="form-control" id="desc"/>
  </div>
  <button type="submit" className="btn btn-sm btn-success">Add Task</button>
</form>
</div>
</>
  )
}