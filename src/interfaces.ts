

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
export interface TopAnime {
    id: string;
    attributes: TopAnimeAttributes;
}
export interface TopAnimeState {
    topAnimeData: TopAnime[];
    loading: boolean;
    error: string | null;
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

export interface RootState {
    topAnime: TopAnimeState;
}

export interface AnimeState {
    animeData: Anime[];
    loading: boolean;
    error: string | null;
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
