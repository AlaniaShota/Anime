// interface GenresAttributes {
//     canonicalName: string;
//     image: {
//         original: string;
//         large: string;
//         medium: string;
//         small: string;
//         tiny: string;
//     };
//     description: string;
// }

// export interface Genres {
//     id: string;
//     attributes: GenresAttributes;
// }

// export interface GenresState {
//     genresData: Genres[];
//     loading: boolean;
//     error: string | null;
// }
// Определение интерфейсов
interface ImageUrls {
    jpg: { image_url: string };
    webp: { image_url: string; small_image_url: string; large_image_url: string };
}

export interface Reviews {
    mal_id: number
    user: {
        images: ImageUrls
        username: string
    },
    review: string,
    reactions: {
        confusing: number
        creative: number
        funny: number
        informative: number
        love_it: number
        nice: number
    }
}

export interface ReviewsState {
    reviewsData: Reviews[];
    loading: boolean;
    error: string | null;
}

export interface Character {
    character: {
        images: ImageUrls;
        mal_id: number;
        name: string;
    };
}

export interface CharacterState {
    characterData: Character[],
    loading: boolean;
    error: string | null;
}

export interface CharacterIdState {
    characterIdData: CharacterId[];
    loading: boolean;
    error: string | null;
}

export interface CharacterId {
    mal_id: number;
    about: string;
    favorites: number;
    images: ImageUrls;
    name: string;
    name_kanji: string;
}