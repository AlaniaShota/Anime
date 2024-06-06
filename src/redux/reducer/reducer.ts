import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Anime, TopAnime } from '../../interfaces';


interface FetchAnimeArgs {
    page: number;
    limit: number;
}

interface CharacterAttributes {
    canonicalName: string;
    image: {
        original: string;
        large: string;
        medium: string;
        small: string;
        tiny: string;
    };
    description: string;
}

interface ReviewsAttributes {
    canonicalName: string;
    image: {
        original: string;
        large: string;
        medium: string;
        small: string;
        tiny: string;
    };
    description: string;
}

interface VideoAttributes {
    canonicalName: string;
    image: {
        original: string;
        large: string;
        medium: string;
        small: string;
        tiny: string;
    };
    description: string;
}

export interface Character {
    id: string;
    attributes: CharacterAttributes;
}

export interface Reviews {
    id: string;
    attributes: ReviewsAttributes;
}

export interface Video {
    id: string;
    attributes: VideoAttributes;
}

export const fetchAnime = createAsyncThunk(
    'anime/fetchAnime',
    async ({ page, limit }: FetchAnimeArgs, { rejectWithValue }) => {
        try {
            const response = await axios.get<{ data: Anime[] }>('https://api.jikan.moe/v4/anime', {
                params: {
                    page: page.toString(),
                    limit: limit.toString(),
                },
            });
            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);

export const searchAnime = createAsyncThunk(
    "anime/searchAnime",
    async (query: string) => {
        const response = await axios.get(`https://api.jikan.moe/v4/anime?search=${query}`);
        return response.data;
    }
);

export const fetchTopAnime = createAsyncThunk(
    'topAnime/fetchTopAnime',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get<{ data: TopAnime[] }>('https://api.jikan.moe/v4/top/anime');
            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    }
);


export const fetchCharacter = createAsyncThunk(
    'character/fetchCharacter',
    async (characterId: string, { rejectWithValue }) => {
        try {
            const response = await axios.get<{ data: Character }>(`https://api.jikan.moe/v4/anime/${characterId}/characters`);
            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    })

export const fetchReviews = createAsyncThunk(
    'reviews/fetchReviews',
    async (characterId: string, { rejectWithValue }) => {
        try {
            const response = await axios.get<{ data: Reviews }>(`https://api.jikan.moe/v4/anime/${characterId}/reviews`);
            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    })

export const fetchVideo = createAsyncThunk(
    'video/fetchVideo',
    async (characterId: string, { rejectWithValue }) => {
        try {
            const response = await axios.get<{ data: Video }>(`https://api.jikan.moe/v4/anime/${characterId}/videos`);
            return response.data.data;
        } catch (error) {
            return rejectWithValue(error.response?.data?.message || error.message);
        }
    })

