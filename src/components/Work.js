import React from 'react'
import Todo from './Todo'

export default function Work(props) {
  let myStyle={
   minHeight:"100vh",
   margin: "100px auto",
  }
  return (
    <div className='container my-3' style={myStyle}>
      <h1 className='my-3'>Add task</h1>
      {props.work.length===0?"No tasks here":
      props.work.map((todo)=>{
        return (<Todo todo={todo}  key={todo.title} onDelete={props.onDelete}/>)

      })
        }
    </div>
  )
}