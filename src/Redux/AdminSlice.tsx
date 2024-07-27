import { createSlice, PayloadAction } from "@reduxjs/toolkit"



export interface AdminDetails {
    firstname: string;
    lastname: string;
    email: string;
    token: string
  }
  
export interface UserState {
    poumkiAdminDetails: AdminDetails | null;
  }
  
  const INITIAL_STATE: UserState = {
    poumkiAdminDetails: null,
  };

export const adminSlice = createSlice({
    name: "admin",
    initialState: INITIAL_STATE,
    reducers: {
        setAdminDetails: (state, action: PayloadAction<AdminDetails>) => {
            state.poumkiAdminDetails = action.payload;
        },
        resetState: () => {
            return INITIAL_STATE;
        }

    }

})

export const { setAdminDetails, resetState } = adminSlice.actions;

export default adminSlice.reducer;