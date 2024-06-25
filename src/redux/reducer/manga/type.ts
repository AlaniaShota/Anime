export interface Manga {
    score: number,
    title: string;
    mal_id: string;
    images: { webp: { large_image_url: string } };
    type: string;
    titles: [{ title: string }];
    episodes: string;
}

export interface MangaAttributes {
    score: number,
    title: string,
    mal_id: string,
    images: { webp: { large_image_url: string } },
    type: string,
    titles: [title: string]
    episodes: string
}

export interface MangaState {
    mangaData: Manga[];
    loading: boolean;
    error: string | null;
}

export interface TopManga {
    score: number,
    title: string;
    mal_id: string;
    images: { webp: { large_image_url: string } };
    type: string;
    titles: [{ title: string }];
    episodes: string;
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