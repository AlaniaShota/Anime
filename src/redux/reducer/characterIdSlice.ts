import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import { CharacterId } from '../type/interfaces';
import { fetchCharacterId } from './anime/reducer';

interface CharacterState {
    characterIdData: CharacterId | [];
    loading: boolean;
    error: string | null;
}

const initialState: CharacterState = {
    characterIdData: [],
    loading: false,
    error: null,
};

const characterIdSlice = createSlice({
    name: 'characterId',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCharacterId.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCharacterId.fulfilled, (state, action: PayloadAction<CharacterId>) => {
                state.loading = false;
                state.characterIdData = action.payload;
            })
            .addCase(fetchCharacterId.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string || 'Unknown error';
            });
    },
});

export const selectCharacterIdData = (state: RootState): CharacterId | [] => state.characterId.characterIdData;
export const selectCharacterIdLoading = (state: RootState): boolean => state.characterId.loading;
export const selectCharacterIdError = (state: RootState): string | null => state.characterId.error;

export default characterIdSlice.reducer;
