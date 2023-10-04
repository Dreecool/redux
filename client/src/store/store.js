import { configureStore } from "@reduxjs/toolkit";
import taskSlices from '../slices/taskSlices'
import getTaskSlices from '../slices/getTaskSlices'

 const store = configureStore({

  reducer: {
  
    task: taskSlices,
    getTask: getTaskSlices
   
  }

})

export default store

