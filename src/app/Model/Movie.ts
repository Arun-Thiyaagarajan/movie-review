export class Movies {
    id?: number;
    movieName: string;
    year: number;
    certficate?: string;
    language: string;
    image: string;
    rating: number;
    description: string;
    categories?: string[];
    cast?: string[];
    directors?: string[];
    writers?: string[];
    music_directors?: string[];
    platforms?: Object[];
    avail_languages?: string[];
};