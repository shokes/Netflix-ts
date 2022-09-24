export interface StateTypes {
  moviesHero: { backdrop_path: string; name: string; overview: string }[];
  isLoading: boolean;
  //trending: { poster_path: string }[];
  moviesTopRated: { poster_path: string }[];
}
