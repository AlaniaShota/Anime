import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store/store';

import { fetchCharacterManga } from './mangaReducer';
import { Character, CharacterState } from '../../type/interfaces';

const initialState: CharacterState = {
    characterData: [],
    loading: false,
    error: null,
};

const characterMangaSlice = createSlice({
    name: 'characterManga',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCharacterManga.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCharacterManga.fulfilled, (state, action: PayloadAction<Character[]>) => {
                state.loading = false;
                state.characterData = action.payload;
            })
            .addCase(fetchCharacterManga.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string || 'Unknown error';
            });
    },
});

export const selectCharacterMangaData = (state: RootState): Character[] => state.character.characterData;
export const selectCharacterMangaLoading = (state: RootState): boolean => state.character.loading;
export const selectCharacterMangaError = (state: RootState): string | null => state.character.error;

export default characterMangaSlice.reducer;