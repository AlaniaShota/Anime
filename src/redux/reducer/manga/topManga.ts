import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from '../../store/store';
import { fetchTopManga } from "./mangaReducer";
import { TopManga, TopMangaState } from "./type";

const initialState: TopMangaState = {
    topMangaData: [],
    loading: false,
    error: null,
};

const topMangaSlice = createSlice({
    name: 'topManga',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTopManga.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTopManga.fulfilled, (state, action: PayloadAction<TopManga[]>) => {
                state.loading = false;
                state.topMangaData = action.payload;
            })
            .addCase(fetchTopManga.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string || 'Unknown error';
            });
    },
});

export const selectTopMangaData = (state: RootState): TopManga[] => state.topManga.topMangaData;
export const selectTopMangaLoading = (state: RootState): boolean => state.topManga.loading;
export const selectTopMangaError = (state: RootState): string | null => state.topManga.error;

export default topMangaSlice.reducer;