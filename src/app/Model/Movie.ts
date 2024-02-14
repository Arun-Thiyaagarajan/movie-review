export class Movies {
    id?: number;
    title: string;
    year: number;
    language: string;
    img: string;
    rating: number;
    desc: string;
    certficate?: string;
    category?: string[];
    cast?: string;
    technicalCast?: Object[];
    director?: string[];
    writer?: string[];
    cinematographer?: string;
    music_director?: string[];
    platforms?: Object[];
    available_languages?: string[];
};