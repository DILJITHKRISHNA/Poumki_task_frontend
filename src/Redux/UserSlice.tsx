import { createSlice, PayloadAction } from "@reduxjs/toolkit"



export interface UserDetails {
  id: string
  firstname: string;
  lastname: string;
  email: string;
  token: string
}

export interface UserState {
  poumkiUserDetails: UserDetails | null;
}

const INITIAL_STATE: UserState = {
  poumkiUserDetails: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setUserDetails: (state, action: PayloadAction<UserDetails>) => {
      state.poumkiUserDetails = action.payload;
    },
    resetState: () => {
      return INITIAL_STATE;
    }

  }

})

export const { setUserDetails, resetState } = userSlice.actions;

export default userSlice.reducer;