import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosRequestConfig } from 'axios';
import { Anime, TopAnime, Character, Reviews, Video, Manga } from '../../../interfaces';
import { TopManga } from './type';

interface FetchMangaArgs {
    page: number;
    limit: number;
}
const __urlMANGA = 'https://api.jikan.moe/v4/'
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
const buildMangaUrl = ({ page, limit }: FetchMangaArgs) => `${__urlMANGA}manga?page=${page}&limit=${limit}`;
// const buildSearchUrl = (query: string) => `${__urlANIME}anime?search=${query}`;
const buildTopMangaUrl = () => `${__urlMANGA}top/manga`;
const buildCharacterUrl = (characterId: string) => `${__urlMANGA}manga/${characterId}/characters`;
const buildReviewsUrl = (characterId: string) => `${__urlMANGA}manga/${characterId}/reviews`;
// const buildVideoUrl = (characterId: string) => `${__urlANIME}anime/${characterId}/videos`;

// // Thunks
export const fetchManga = createFetchThunk<Manga[], FetchMangaArgs>('manga/fetchManga', buildMangaUrl);
// export const searchAnime = createFetchThunk<Anime[], string>('anime/searchAnime', buildSearchUrl);
export const fetchTopManga = createFetchThunk<TopManga[], void>('topManga/fetchTopManga', buildTopMangaUrl);
export const fetchCharacterManga = createFetchThunk<Character, string>('character/fetchCharacter', buildCharacterUrl);
export const fetchReviews = createFetchThunk<Reviews, string>('reviews/fetchReviews', buildReviewsUrl);
// export const fetchVideo = createFetchThunk<Video, string>('video/fetchVideo', buildVideoUrl);
