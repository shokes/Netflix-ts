export interface HeroType {
  heroMovieProp: {
    backdrop_path: string;
    original_title?: string;
    name: string;
    overview: string;
    first_air_date: string;
    vote_average?: number;
    id: number;
  }[];
}
