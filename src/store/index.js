import { configureStore } from '@reduxjs/toolkit'
import itemSlice from './itemSlice'
import fetchStatusSlice from './fetchStatusSlice'
import bagSlice from './bagSlice'

const amazonStore = configureStore({
    reducer: {
        item: itemSlice.reducer,
        fetchStatus: fetchStatusSlice.reducer,
        bag: bagSlice.reducer
    }
})
export default amazonStore