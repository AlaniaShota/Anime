// import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import { Genres, GenresState } from "../../type/interfaces";
// import { RootState } from "../../store/store";

// const initialState: GenresState = {
//     genresData: [],
//     loading: false,
//     error: null,
// };

// const genresSlice = createSlice({
//     name: 'genres',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(fetchGenres.pending, (state) => {
//                 state.loading = true;
//                 state.error = null;
//             })
//             .addCase(fetchGenres.fulfilled, (state, action: PayloadAction<Genres[]>) => {
//                 state.loading = false;
//                 state.genresData = action.payload;
//             })
//             .addCase(fetchGenres.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.payload as string || 'Unknown error';
//             });
//     },
// });

// export const selectGenresData = (state: RootState): Genres[] => state.genres.genresData;
// export const selectGenresLoading = (state: RootState): boolean => state.genres.loading;
// export const selectGenresError = (state: RootState): string | null => state.genres.error;

// export default genresSlice.reducer;