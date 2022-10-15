import { createSlice } from '@reduxjs/toolkit'

const layoutReducer = createSlice({
    name: 'layout',
    initialState: {
        dummyState: 'asdasdasd'
    },
    reducers: {
        exampleAction: () => {
            alert('here')
        }
    }
})

export default layoutReducer.reducer