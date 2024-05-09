import React from 'react'

const ShowTask = ({taskList, setTaskList, task, setTask}) => {

    const handleEdit= (id) =>{
        //ktu ju qasmi vec njanes task qe deshirojm na
       const selectedTask = taskList.find(todo=> todo.id === id);     
       setTask(selectedTask);
    }

    const handleDelete = (id)=>{
            // ktu dojna me marr njanen qe na duhet jo kejt id po vec qajo qe osht e kundert me tjerat.
        const updatedTaskList = taskList.filter(todo=>todo.id !== id);
        setTaskList(updatedTaskList);
    }


  return (
    <section className='showTask'>
        <div className="head">
            <div>
                <span className='title'>Todo</span>
                <span className='count'>{taskList.length}</span>
            </div>
                <button className='clearAll' onClick={()=>setTaskList([])}>Clear All</button>
        </div>

        <ul>
            {taskList.map((todo)=>(
                <li key={todo.id}>
                <p>
                    <span className='name'>{todo.name}</span>
                    <span className='time'>{todo.time}</span>
                </p>
                <i onClick={()=>handleEdit(todo.id)} className='bi bi-pencil-square'></i>
                <i className='bi bi-trash' onClick={()=> handleDelete(todo.id)}></i>
                </li>
            ))}
          
         
        </ul>

    </section>
  )
}

export default ShowTask 
