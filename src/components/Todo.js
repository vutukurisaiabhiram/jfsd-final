import React from 'react'

export default function Todo({todo,onDelete}) {
  return (
    <>
    <div className='container' >
      <div className="card">
       <div className="card-body">
        <h3>{todo.title}</h3>
        <h5>{todo.desc}</h5>
        <button className='btn btn-sm btn-danger' onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
        
        </div>       
    </div>
    </>
  )
}