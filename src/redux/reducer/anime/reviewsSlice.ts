import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Reviews } from '../../type/interfaces';
import { fetchReviews } from './reducer';
import { RootState } from '../../store/store';

interface ReviewsState {
    reviewsData: Reviews | null;
    loading: boolean;
    error: string | null;
}

const initialState: ReviewsState = {
    reviewsData: null,
    loading: false,
    error: null,
};

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchReviews.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchReviews.fulfilled, (state, action: PayloadAction<Reviews>) => {
                state.loading = false;
                state.reviewsData = action.payload;
            })
            .addCase(fetchReviews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string || 'Unknown error';
            });
    },
});

export const selectReviewsData = (state: RootState): Reviews | null => state.reviews.reviewsData;
export const selectReviewsLoading = (state: RootState): boolean => state.reviews.loading;
export const selectReviewsError = (state: RootState): string | null => state.reviews.error;

export default reviewsSlice.reducer;