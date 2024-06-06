import { configureStore, combineReducers, ThunkAction, Action } from '@reduxjs/toolkit';
import animeReducer from '../reducer/slice';
import topAnimeReducer from '../reducer/topAnimeSlice';
import characterReducer from '../reducer/characterSlice';
import reviewsSlice from '../reducer/reviewsSlice';
import videoSlice from '../reducer/videoSlice';

const rootReducer = combineReducers({
    anime: animeReducer,
    topAnime: topAnimeReducer,
    character: characterReducer,
    reviews: reviewsSlice,
    video: videoSlice
});

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export default store;
