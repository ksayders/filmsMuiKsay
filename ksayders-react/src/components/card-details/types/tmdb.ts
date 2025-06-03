export interface Genre {
    id: number;
    name: string;
}

export interface MovieDetails {
    title: string;
    release_date: string;
    backdrop_path: string | null;
    origin_country: string[];
    genres: Genre[];
    vote_average: number;
    budget: number;
    popularity: number;
    runtime: number;
}

export interface CrewMember {
    id: number;
    name: string;
    job: string;
}

export interface Credits {
    crew: CrewMember[];
}