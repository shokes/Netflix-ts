export interface StateTypes {
  tvShowsHero: {
    backdrop_path: string;
    original_title?: string;
    name: string;
    overview: string;
    first_air_date: string;
    vote_average?: number;
    id: number;
  }[];
  isLoading: boolean;
  //trending: { poster_path: string }[];
  tvShowsTopRated: { poster_path: string; id: number }[];
}
