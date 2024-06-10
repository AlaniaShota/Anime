import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TopAnime, TopAnimeState } from "./type";
import { fetchTopAnime } from "./reducer";
import { RootState } from "../../store/store";

const initialState: TopAnimeState = {
    topAnimeData: [],
    loading: false,
    error: null,
};

const topAnimeSlice = createSlice({
    name: 'topAnime',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTopAnime.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTopAnime.fulfilled, (state, action: PayloadAction<TopAnime[]>) => {
                state.loading = false;
                state.topAnimeData = action.payload;
            })
            .addCase(fetchTopAnime.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string || 'Unknown error';
            });
    },
});

export const selectTopAnimeData = (state: RootState): TopAnime[] => state.topAnime.topAnimeData;
export const selectTopAnimeLoading = (state: RootState): boolean => state.topAnime.loading;
export const selectTopAnimeError = (state: RootState): string | null => state.topAnime.error;

export default topAnimeSlice.reducer;