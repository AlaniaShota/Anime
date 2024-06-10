import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Character } from '../type/interfaces';
import { fetchCharacter } from './anime/reducer';
import { RootState } from '../store/store';
interface CharacterState {
    characterData: Character | null;
    loading: boolean;
    error: string | null;
}

const initialState: CharacterState = {
    characterData: null,
    loading: false,
    error: null,
};

const characterSlice = createSlice({
    name: 'character',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCharacter.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCharacter.fulfilled, (state, action: PayloadAction<Character>) => {
                state.loading = false;
                state.characterData = action.payload;
            })
            .addCase(fetchCharacter.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string || 'Unknown error';
            });
    },
});

export const selectCharacterData = (state: RootState): Character | null => state.character.characterData;
export const selectCharacterLoading = (state: RootState): boolean => state.character.loading;
export const selectCharacterError = (state: RootState): string | null => state.character.error;

export default characterSlice.reducer;