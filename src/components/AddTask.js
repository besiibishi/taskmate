import React from 'react'

const AddTask = ({taskList, setTaskList, task, setTask}) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();

    //ne if jemi per me editu update ne else direkt me e shtu taskun tone.
    if(task.id){
        const date = new Date;
        const updatedTaskList = taskList.map((todo)=> (
            todo.id === task.id ? {id: task.id, name: task.name, time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : todo
        ));
        setTaskList(updatedTaskList); 
        //masi ta kryjm procesin tone e kthejm taskun ne empty
        setTask({});
    }

    else{

        const date = new Date();
        const newTask = {id: date.getTime(), name: e.target.task.value, 
            time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            
        }
        setTaskList([...taskList, newTask]);
        setTask({});
       
    }


}
  
    return (
    <section className='addTask'>
        <form onSubmit={handleSubmit}>
            <input value={task.name || ""} onChange={e => setTask({...task, name:e.target.value})} type="text" name='task' autoComplete='off' maxLength="25" placeholder='Add Task' />
            <button type='Submit'>{task.id ? "Update" : "Add" }</button>
        </form>
    </section>
  )
}

export default AddTask
    