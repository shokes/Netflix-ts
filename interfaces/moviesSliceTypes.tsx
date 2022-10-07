export interface StateTypes {
  moviesHero: {
    backdrop_path: string;
    name: string;
    overview: string;
    id: number;
    first_air_date: string;
    poster_path: string;
  }[];
  isLoading: boolean;

  moviesTopRated: { poster_path: string }[];
}
