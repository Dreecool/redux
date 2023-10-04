import './App.css';
import { setTask } from './slices/taskSlices'
import {useSelector, useDispatch} from 'react-redux'
import { addTask } from './slices/taskSlices';
import { useEffect, useState } from 'react';
import { getAllTask } from './slices/getTaskSlices';
import { deleteTask } from './slices/getTaskSlices';
import { updateData } from './slices/getTaskSlices';

function App() {

  const dispatch = useDispatch();

  const inputTask = useSelector((state) => state.task.inputTask);
  const getData = useSelector((state) => state.getTask.responseData);
  const [key, setKey] = useState();
  const [isDisabled, setIsDisabled] = useState(true)
  const [changeText, setChangeText] = useState('');

  useEffect(() => {

    dispatch(getAllTask());

  }, [getData, deleteTask]);



  return (

   <div>

    <h1 className="text-center">To Do List</h1>

    <div className='d-flex justify-content-center mt-5'>

      <div className='col-lg-3 border border-black p-3'>

       <input value={inputTask} onChange={((e) => dispatch(setTask(e.target.value)))} placeholder= "Type your task" className="col-lg-8 me-4"/>
       <button onClick={(e) => {
        e.preventDefault();

        dispatch(addTask({
          task: inputTask
        }))

       }}
       >Add Task</button>

      </div>
      
    </div>

      <div className='d-flex justify-content-center mt-5'>


          <div className='flex-column col-lg-3'>

            {getData && getData.length === 0 ? <h1 className='text-center'> No Tasks </h1> : 

              getData && getData.map((val) => {

                return (

                  <div className='col-lg-12 border border-black p-3 mb-3'>

                    <input  defaultValue={val.task} onChange={(e) => setChangeText(e.target.value)} className='col-lg-8 me-4' disabled={val._id === key ? !isDisabled : isDisabled}/>

                    <button onClick={() => {

                    setKey(val._id)
                      
                    }}>ED</button>

                    <button onClick={() => {

                    dispatch(deleteTask(val._id))

                    }}>DLT</button>

                    {val._id === key ? <button onClick={() => {

                      setKey('')
                      
                      dispatch(updateData({

                        id: val._id,
                        task: changeText

                      }))
                      
                    }}>SVE</button> : null}

                  </div>

                )


              })


              }

        

          </div>

      

       </div>



      


    
   


   </div>

  );

}

export default App;
