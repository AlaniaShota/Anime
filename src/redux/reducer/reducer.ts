import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosRequestConfig } from 'axios';
import { Anime, TopAnime, Character, Reviews, Video } from '../../interfaces';

interface FetchAnimeArgs {
    page: number;
    limit: number;
}
const __urlANIME = 'https://api.jikan.moe/v4/'
// General fetch function
const fetchData = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    try {
        const response = await axios.get<T>(url, config);
        return response.data.data;
    } catch (error) {
        throw new Error(error.response?.data?.message || error.message);
    }
};

// Async thunk creator
const createFetchThunk = <Returned, ThunkArg>(
    typePrefix: string,
    urlBuilder: (arg: ThunkArg) => string,
    configBuilder?: (arg: ThunkArg) => AxiosRequestConfig
) => {
    return createAsyncThunk(typePrefix, async (arg: ThunkArg, { rejectWithValue }) => {
        try {
            const url = urlBuilder(arg);
            const config = configBuilder ? configBuilder(arg) : undefined;
            return await fetchData<Returned>(url, config);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    });
};

// URL builders
const buildAnimeUrl = ({ page, limit }: FetchAnimeArgs) => `${__urlANIME}anime?page=${page}&limit=${limit}`;
const buildSearchUrl = (query: string) => `${__urlANIME}anime?search=${query}`;
const buildTopAnimeUrl = () => `${__urlANIME}top/anime`;
const buildCharacterUrl = (characterId: string) => `${__urlANIME}anime/${characterId}/characters`;
const buildReviewsUrl = (characterId: string) => `${__urlANIME}anime/${characterId}/reviews`;
const buildVideoUrl = (characterId: string) => `${__urlANIME}anime/${characterId}/videos`;

// Thunks
export const fetchAnime = createFetchThunk<Anime[], FetchAnimeArgs>('anime/fetchAnime', buildAnimeUrl);
export const searchAnime = createFetchThunk<Anime[], string>('anime/searchAnime', buildSearchUrl);
export const fetchTopAnime = createFetchThunk<TopAnime[], void>('topAnime/fetchTopAnime', buildTopAnimeUrl);
export const fetchCharacter = createFetchThunk<Character, string>('character/fetchCharacter', buildCharacterUrl);
export const fetchReviews = createFetchThunk<Reviews, string>('reviews/fetchReviews', buildReviewsUrl);
export const fetchVideo = createFetchThunk<Video, string>('video/fetchVideo', buildVideoUrl);
