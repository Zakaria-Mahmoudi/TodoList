import { useState } from "react"
function TodoList(){
    const[tasks,setTasks]=useState(['EATY','TRAINY','SLEEPY']);
    const[newtask,setNewTask]=useState("");
    function changeInput(event){
        setNewTask(event.target.value)
    }
    function addTask(){
        if(newtask.trim() !==""){
            setTasks(t=>[...t,newtask]);
            setNewTask('')

        }
    }
    function removeTask(index){
        const updatedtasks =tasks.filter((_,i)=> i !== index);
        setTasks(updatedtasks)
    }
    function moveTaskUp(index){
        if(index>0){
            const updatedtasks=[...tasks];
            [updatedtasks[index], updatedtasks[index-1]]=[updatedtasks[index-1],updatedtasks[index]]
            setTasks(updatedtasks)
        }}
    function moveTaskDown(index){
            if(index<tasks.length-1){
            const updatedtasks=[...tasks];
            [updatedtasks[index], updatedtasks[index+1]]=[updatedtasks[index+1],updatedtasks[index]]
            setTasks(updatedtasks)
        }
    }
    return(
        <div className="container">
            <h1>TO-DO-LIST</h1>
            <input type="text" placeholder="enter a task..." value={newtask} onChange={changeInput}/>
            <button className="addB" onClick={addTask}>Add</button>
            <ol>
                {
                    tasks.map((task,index)=>
                    <li key={index}>
                    <span className="task">{task}</span>

                    <div className="buttons-group">
                        <button className="deleteB" onClick={() => removeTask(index)}>Delete</button>
                        <button className="upB" onClick={() => moveTaskUp(index)}>↑</button>
                        <button className="downB" onClick={() => moveTaskDown(index)}>↓</button>
                    </div>
</li>
                    
                    )}
            </ol>
        </div>
    )
}

export default TodoList