import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Video } from './type';
import { fetchVideo } from './reducer';
import { RootState } from '../../store/store';

interface VideoState {
    videoData: Video | [];
    loading: boolean;
    error: string | null;
}

const initialState: VideoState = {
    videoData: [],
    loading: false,
    error: null,
};

const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideo.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchVideo.fulfilled, (state, action: PayloadAction<Video>) => {
                state.loading = false;
                state.videoData = action.payload;
            })
            .addCase(fetchVideo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string || 'Unknown error';
            });
    },
});

export const selectVideoData = (state: RootState): Video | [] => state.video.videoData;
export const selectVideoLoading = (state: RootState): boolean => state.video.loading;
export const selectVideoError = (state: RootState): string | null => state.video.error;

export default videoSlice.reducer;