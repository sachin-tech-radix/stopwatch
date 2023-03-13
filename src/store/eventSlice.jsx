const { createSlice } = require('@reduxjs/toolkit');
const eventSlice = createSlice({
    name:'event',
    initialState:[],
    reducers:{
        add(state,action){
            state.push(action.payload);console.log(action.payload);
        },
    },
});
export const {add} = eventSlice.actions;
export default eventSlice.reducer;