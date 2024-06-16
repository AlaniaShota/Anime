import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';
import { Reviews, ReviewsState } from '../../type/interfaces';
import { fetchReviewsManga } from './mangaReducer';

const initialState: ReviewsState = {
    reviewsData: [],
    loading: false,
    error: null,
};

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchReviewsManga.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchReviewsManga.fulfilled, (state, action: PayloadAction<Reviews[]>) => {
                state.loading = false;
                state.reviewsData = action.payload;
            })
            .addCase(fetchReviewsManga.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string || 'Unknown error';
            });
    },
});

export const selectReviewsMangaData = (state: RootState): Reviews[] => state.reviews.reviewsData;
export const selectReviewsMangaLoading = (state: RootState): boolean => state.reviews.loading;
export const selectReviewsMangaError = (state: RootState): string | null => state.reviews.error;

export default reviewsSlice.reducer;