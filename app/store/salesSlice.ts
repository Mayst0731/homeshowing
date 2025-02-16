// store/salesSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SalesState {
  data: any[];
}

const initialState: SalesState = {
  data: [],
};

const salesSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    setSalesData: (state, action: PayloadAction<any[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setSalesData } = salesSlice.actions;
export default salesSlice.reducer;
