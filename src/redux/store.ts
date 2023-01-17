import { configureStore } from '@reduxjs/toolkit'
import stepper from './stepper/stepper.reducer';

export const store = configureStore({
  reducer: {
    stepper,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch