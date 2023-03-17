import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalOpen: false};

const modalSlice = createSlice({
    name: 'modal',
    initialState: initialState,
    reducers: {
        openModal(state) {
            state.modalOpen = !state.modalOpen;
        }
    }
});


export const modalActions = modalSlice.actions;
export default modalSlice.reducer;