import { createSlice } from "@reduxjs/toolkit"

const fetchStatusSlice = createSlice({
    name: 'fetchStatus',
    initialState: {
        fetchDone: false,
        currentlyFetching: false
    },
    reducers: {
        markFetchDone: (state) => {
            state.fetchDone = true
        },
        markCurrentlyFetchingStarted: (state) => {
            state.currentlyFetching = true
        },
        markCurrentlyFetchingDone: (state) => {
            state.currentlyFetching = false
        }
    }
})
export const fetchStatusAction = fetchStatusSlice.actions
export default fetchStatusSlice