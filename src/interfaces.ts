

export interface Anime {
    id: string;
    attributes: AnimeAttributes;
    canonicalTitle: string;
    coverImage: { large: string; medium: string, small: string, tiny: string, original: string, },
    posterImage: { large: string; medium: string, small: string, tiny: string, original: string, };
    showType: string;
    episodeCount: number;
    title: string,
    averageRating: string,
    description: string,
    youtubeVideoId: string
    // type: string
    startDate: string
}


export interface TopAnime {
    id: string;
    attributes: TopAnimeAttributes;
}

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
    // type: string
    
    startDate: string
}

export interface TopAnimeAttributes {
    canonicalTitle: string;
    coverImage: { large: string; medium: string, small: string, tiny: string, original: string },
    posterImage: { large: string; medium: string, small: string, tiny: string, original: string, };
    showType: string;
    episodeCount: number;
    title: string,
    averageRating: string,
    description: string,
    youtubeVideoId: string
    // type: string
    ageRating: string
}

export interface AnimeState {
    animeData: Anime[];
    loading: boolean;
    error: string | null;
}

export interface TopAnimeState {
    topAnimeData: TopAnime[];
    loading: boolean;
    error: string | null;
}

export interface RootState {
    topAnime: TopAnimeState;
}
