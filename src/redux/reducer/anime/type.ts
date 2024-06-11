export interface AnimeBase {
    id: string;
    title: string;
    mal_id: number;
    images: {
        webp: { large_image_url: string, small_image_url: string, image_url: string },
        jpg: { large_image_url: string, small_image_url: string, image_url: string }
    };
    type: string;
    titles: [{ title: string }];
    episodes: number,
    aired: { from: string },
    approved: boolean,
    background: string,
    broadcast: {
        day: string, string: string
        time: string
        timezone: string
    },
    duration: string,
    favorites: number,
    genres: [{ mal_id: number, type: string, name: string, url: string }],
    licensors: [{ mal_id: number, type: string, name: string, url: string }],
    members: number,
    popularity: number,
    producers: [{ mal_id: number, type: string, name: string, url: string }],
    rank: number,
    rating: string,
    score: number,
    scored_by: number,
    season: string,
    source: string,
    status: string,
    studios: [{ mal_id: number, type: string, name: string, url: string }],
    synopsis: string,
    title_english: string,
    title_synonyms: [string]
    trailer: {
        embed_url: string,
        youtube_id: string,
        url: string,
        image: {
            webp: { large_image_url: string, small_image_url: string, image_url: string },
            jpg: { large_image_url: string, small_image_url: string, image_url: string }
        }
    }
    title_japanese: string,
    url: string
    year: number
}

export interface Anime extends AnimeBase { }
export interface TopAnime extends AnimeBase { }
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
    mal_id: number,
    title: string,
    episode: string,
    url: string,
    images: {
        jpg: {
            image_url: string
        }
    }
}

export interface RootState {
    topAnime: TopAnimeState;
}

export interface Video {
    id: string;
    attributes: VideoAttributes;
}