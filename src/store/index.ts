import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import music from './reducers/api/music'
import layout from './reducers/ui/layout'

const uiReducers = combineReducers({
    layout,
})

const apiReducers = combineReducers({
    music,
})

const combinedReducers = combineReducers({
    ui: uiReducers,
    api: apiReducers
})

export const store = configureStore({
    reducer: combinedReducers
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector



