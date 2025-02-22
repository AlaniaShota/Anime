import { configureStore, combineReducers, ThunkAction, Action } from '@reduxjs/toolkit';
import animeReducer from '../reducer/anime/slice';
import topAnimeReducer from '../reducer/anime/topAnimeSlice';
import characterReducer from '../reducer/characterSlice';
import reviewsSlice from '../reducer/anime/reviewsSlice';
import videoSlice from '../reducer/anime/videoSlice';
import searchReducer from '../reducer/searchSlice';
import mangaReducer from '../reducer/manga/slice'
import topMangaReducer from '../reducer/manga/topManga'
import characterMangaSlice from '../reducer/manga/characterMangaSlice';
import pictureMangaSlice from '../reducer/manga/pictureMangaSlice';
import characterIdSlice from '../reducer/characterIdSlice';
import { useDispatch } from 'react-redux';

const rootReducer = combineReducers({
    anime: animeReducer,
    manga: mangaReducer,
    topAnime: topAnimeReducer,
    topManga: topMangaReducer,
    character: characterReducer,
    characterManga: characterMangaSlice,
    characterId: characterIdSlice,
    reviews: reviewsSlice,
    video: videoSlice,
    search: searchReducer,
    pictureManga: pictureMangaSlice,
});

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
