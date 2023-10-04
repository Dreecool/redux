import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Axios from 'axios'

export const addTask = createAsyncThunk("add/task", async (data) => {

  try {

    const response = await Axios.post("http://localhost:3001/addTask", data);

    return response.data

  } catch(error) {

    throw error.response.data

  }

})



export const taskSlices = createSlice({

  name: 'task',
  initialState: {
    inputTask: ''
  },

  reducers: {
    setTask: (state, action) => {

      state.inputTask = action.payload

    }
  }

})


export const { setTask } = taskSlices.actions

export default taskSlices.reducer