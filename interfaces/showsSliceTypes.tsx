export interface StateTypes {
  tvShowsHero: {
    backdrop_path: string;
    original_title?: string;
    name: string;
    overview: string;
    first_air_date: string;
    vote_average?: number;
    id: number;
    poster_path: string;
  }[];
  isLoading: boolean;

  tvShowsTopRated: { poster_path: string; id: number }[];
}
