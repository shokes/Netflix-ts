export interface StateTypes {
  heroMovie: { backdrop_path: string; name: string; overview: string }[];
  isLoading: boolean;
  trending: { poster_path: string }[];
  topRated: { poster_path: string }[];
  action: { poster_path: string }[];
  comedy: { poster_path: string }[];
  horror: { poster_path: string }[];
  documentaries: { poster_path: string }[];
  romance: { poster_path: string }[];
}
