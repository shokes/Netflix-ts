export interface StateTypes {
  tvShowsHero: { backdrop_path: string; name: string; overview: string }[];
  isLoading: boolean;
  //trending: { poster_path: string }[];
  tvShowsTopRated: { poster_path: string }[];
}
