import { configureStore, combineReducers, ThunkAction, Action } from '@reduxjs/toolkit';
import animeReducer from '../reducer/slice';
import topAnimeReducer from '../reducer/topAnimeSlice';
import characterReducer from '../reducer/characterSlice';
import reviewsSlice from '../reducer/reviewsSlice';
import videoSlice from '../reducer/videoSlice';
import searchSlice from '../reducer/searchSlice';
import mangaReducer from '../reducer/manga/slice'
import topMangaReducer from '../reducer/manga/topManga'
import characterMangaSlice from '../reducer/manga/characterMangaSlice';

const rootReducer = combineReducers({
    anime: animeReducer,
    manga: mangaReducer,
    topAnime: topAnimeReducer,
    topManga: topMangaReducer,
    character: characterReducer,
    characterManga: characterMangaSlice,
    reviews: reviewsSlice,
    video: videoSlice,
    search: searchSlice
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
