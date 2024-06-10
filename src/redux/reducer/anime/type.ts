export interface AnimeAttributes {
    canonicalTitle: string;
    coverImage: { large: string; medium: string, small: string, tiny: string, original: string, },
    posterImage: { large: string; medium: string, small: string, tiny: string, original: string, };
    showType: string;
    episodeCount: number;
    title: string,
    averageRating: string,
    description: string,
    youtubeVideoId: string
    startDate: string
}

export interface Anime {
    id: string;
    attributes: AnimeAttributes;
}

export interface TopAnime {
    id: string;
    attributes: AnimeAttributes;
}
export interface TopAnimeState {
    topAnimeData: TopAnime[];
    loading: boolean;
    error: string | null;
}

export interface AnimeState {
    animeData: Anime[];
    loading: boolean;
    error: string | null;
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

export interface RootState {
    topAnime: TopAnimeState;
}

export interface Video {
    id: string;
    attributes: VideoAttributes;
}