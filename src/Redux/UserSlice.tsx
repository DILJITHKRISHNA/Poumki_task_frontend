import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
    poumkiUserDetails: {},
}

export const userSlice = createSlice({
    name: "user",
    initialState: INITIAL_STATE,
    reducers: {
        setUserDetails: (state, action) => {
            state.poumkiUserDetails = action.payload;
            console.log(action.payload,'-----------------------------------');
        },
        resetState: () => {
            return INITIAL_STATE;
        }

    }

})

export const { setUserDetails, resetState } = userSlice.actions; 

export default userSlice.reducer;