interface GenresAttributes {
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

export interface Genres {
    id: string;
    attributes: GenresAttributes;
}

export interface GenresState {
    genresData: Genres[];
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


export interface Character {
    id: string;
    attributes: CharacterAttributes;
}

export interface Reviews {
    id: string;
    attributes: ReviewsAttributes;
}

