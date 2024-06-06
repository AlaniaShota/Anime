import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchAnime } from './reducer';
import { RootState } from '../store/store';
import { Anime, AnimeState } from '../../interfaces';

const initialState: AnimeState = {
    animeData: [],
    loading: false,
    error: null,
};

const animeSlice = createSlice({
    name: 'anime',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAnime.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAnime.fulfilled, (state, action: PayloadAction<Anime[]>) => {
                state.loading = false;
                state.animeData = action.payload;
            })
            .addCase(fetchAnime.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string || 'Unknown error';
            });
    },
});

export const selectAnimeData = (state: RootState): Anime[] => state.anime.animeData;
export const selectAnimeLoading = (state: RootState): boolean => state.anime.loading;
export const selectAnimeError = (state: RootState): string | null => state.anime.error;

export default animeSlice.reducer;
