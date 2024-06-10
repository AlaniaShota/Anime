import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { RootState } from '../../store/store';
import { fetchPictureManga } from "./mangaReducer";
import {PictureManga, PictureMangaState } from "./type";

const initialState: PictureMangaState = {
    pictureMangaData: [],
    loading: false,
    error: null,
};

const pictureMangaSlice = createSlice({
    name: 'pictureManga',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPictureManga.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPictureManga.fulfilled, (state, action: PayloadAction<PictureManga[]>) => {
                state.loading = false;
                state.pictureMangaData = action.payload;
            })
            .addCase(fetchPictureManga.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string || 'Unknown error';
            });
    },
});

export const selectPictureMangaData = (state: RootState): PictureManga[] => state.pictureManga.pictureMangaData;
export const selectPictureMangaLoading = (state: RootState): boolean => state.pictureManga.loading;
export const selectPictureMangaError = (state: RootState): string | null => state.pictureManga.error;

export default pictureMangaSlice.reducer;