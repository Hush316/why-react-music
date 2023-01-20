import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 100,
    name: 'kabuto',
  },
  reducers: {
    changeCountAction(state, { payload }) {
      payload++
      state.count = payload
    },
  },
})

export const { changeCountAction } = counterSlice.actions
export default counterSlice.reducer
