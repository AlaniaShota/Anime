export interface Manga {
    // id: string;
    id: string;
    title: string; // Добавлено свойство title
    mal_id: string;
    images: { webp: { large_image_url: string } };
    type: string;
    titles: [{ title: string }]; // Обновлено определение titles
    episodes: string;
}

export interface MangaAttributes {
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
    id: string;
    // id: string;
    title: string; // Добавлено свойство title
    mal_id: string;
    images: { webp: { large_image_url: string } };
    type: string;
    titles: [{ title: string }]; // Обновлено определение titles
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