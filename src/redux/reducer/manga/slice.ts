import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { MangaState, Manga } from '../../../interfaces';
import { fetchManga } from './mangaReducer';

const initialState: MangaState = {
    mangaData: [],
    loading: false,
    error: null,
};

const mangaSlice = createSlice({
    name: 'manga',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchManga.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchManga.fulfilled, (state, action: PayloadAction<Manga[]>) => {
                state.loading = false;
                state.mangaData = action.payload;
            })
            .addCase(fetchManga.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string || 'Unknown error';
            })
        // .addCase(searchAnime.fulfilled, (state, action) => {
        //     state.loading = false;
        //     state.mangaData = action.payload;
        // })
        // .addCase(searchAnime.rejected, (state, action) => {
        //     state.loading = false;
        //     state.error = action.error.message;
        // });
    },
});

export const selectMangaData = (state: RootState): Manga[] => state.manga.mangaData;
export const selectMangaLoading = (state: RootState): boolean => state.manga.loading;
export const selectMangaError = (state: RootState): string | null => state.manga.error;

export default mangaSlice.reducer;
