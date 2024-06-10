export interface Manga {
    id: string;
    attributes: MangaAttributes;
}

export interface MangaAttributes {
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

export interface MangaState {
    mangaData: Manga[];
    loading: boolean;
    error: string | null;
}

export interface TopManga {
    id: string;
    attributes: MangaAttributes;
}
export interface TopMangaState {
    topMangaData: TopManga[];
    loading: boolean;
    error: string | null;
}

export interface PictureManga {
    id: string;
    attributes: MangaAttributes;
}

export interface PictureMangaState {
    pictureMangaData: PictureManga[];
    loading: boolean;
    error: string | null;
}

export interface RootState {
    topManga: TopMangaState;
}