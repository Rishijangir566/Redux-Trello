// import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTask, setInput } from "./slices/slice";
import { useState } from "react";


function App() {
  const dispatch = useDispatch();
  const initState = useSelector((state) => state.trelloReducer);
  
  const [show, setShow]=useState({})

  // console.log(initState);
  // console.log(setInput)

  function handleShow(listId){
    setShow(prev=>({
      ...prev,
      [listId]:true
    }))
  }

  return (
    <>
      <div className="  h-screen">
        <h1 className=" text-center text-3xl font-bold bg-purple-400 py-3 text-blue-950"> Trello </h1>
        <ul className="flex justify-around pt-12" >
          {initState?.lists.map((todo) => (
          <div key={todo.id} className="border px-8 py-4 ">
           <li >
             <h2 className="text-2xl font-bold text-center mb-4"> {todo.name}</h2> 
              <ul>
                {todo.tasks.map((task) => (
                  <li key={task.id} className="list-disc">{task.task}</li>
                ))}
              </ul>
              {
                show[todo.id]?(
                <><input
                type="text"
                placeholder="Type hear"
                className="border rounded m-1 w-[10rem]"
                value={initState.input[todo.id]}
                onChange={(e) => dispatch(setInput({ listId: todo.id, value: e.target.value }))}
              />
              <button onClick={() => dispatch(addTask({ listId: todo.id }))} className="bg-green-400 px-2 rounded">
                Add
              </button> </> ):null
              }
            </li>
              <button onClick={()=>handleShow(todo.id)} className="bg-blue-800 py-1 px-8 text-white rounded mt-4">
                + Add Another List
              </button>
              </div> 
          ))}
        </ul>
      </div>

    </>
  );
}

export default App;
