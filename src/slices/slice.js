import { createSlice } from "@reduxjs/toolkit";
import { initData } from "../initData";

export const trelloSlice = createSlice({
  name: "trelloSlice",
  initialState: {
    input: {},
    lists: initData,
  },
  reducers: {
    setInput: function (state, action) {
      const { listId, value } = action.payload;
      state.input[listId] = value;
    },

    addTask: function (state,action) { 
      const { listId } = action.payload;
      const list = state.lists.find((l) => l.id === listId);
      const text = state.input[listId];

    if(list){
      const newTask = {
         id:Date.now() ,
         task:text,
            // list.tasks.length > 0 
            //   ? list.tasks[list.tasks.length - 1].id + 1 
            //   : 1,
       };
       list.tasks.push(newTask);
    }
    state.input[listId]=""
    },
  },
});
export const trelloReducer = trelloSlice.reducer;
export const { addTask, setInput } = trelloSlice.actions;
