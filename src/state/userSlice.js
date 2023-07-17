import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "user",
  initialState:[{
    email :"",
    is_loggedIn: false,
    tocken:""
}],
  reducers:{
      logIN: (state, action)=>{
        if(true){
          state.email= 'abinettassew@gmail.com'
          state.is_loggedIn = true
          state.tocken="backend here"
        }
      },
      logOut: (state, action)=>{
        state.email = "";
        state.is_loggedIn = "";
        state.tocken = "";
      }
  }
});

export const {logIN, logOut} = usersSlice.actions;

export default usersSlice.reducer;