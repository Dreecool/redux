  import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
  import Axios from 'axios'


  export const getAllTask = createAsyncThunk("get/task", async () => {

    try {

      const response = await Axios.get("http://localhost:3001/getTask");

      return response.data

    } catch (error) {

      throw error.response.data

    }

  })


export const deleteTask = createAsyncThunk("delete/task", async (id) => {

  
  try {

    const response = await Axios.delete(`http://localhost:3001/deleteTask/${id}`);

    return response.data

  } catch (error) {

    throw error.response.data

  }

})

export const updateData = createAsyncThunk("update/task", async (data) => {

  try {

    const response = await Axios.put("http://localhost:3001/updateTask", data);

    return response.data

  } catch(error) {

    throw error.response.data

  }

})

  const getTask = createSlice({

    name: 'getTask',

    initialState: {},

    reducers: {},

    extraReducers: (builder) => {
      builder
        .addCase(getAllTask.pending, (state) => {
          state.status = 'pending'; 
          state.error = null;
        })
        .addCase(getAllTask.fulfilled, (state, action) => {
          state.responseData = action.payload;
          state.error = null;
        })
        .addCase(getAllTask.rejected, (state, action) => {
          state.status = 'rejected'; 
          state.error = action.error.message;
        })
 
      
    },

  });



  export default getTask.reducer