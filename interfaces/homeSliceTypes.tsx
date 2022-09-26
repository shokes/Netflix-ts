export interface StateTypes {
  heroMovie: {
    backdrop_path: string;
    name: string;
    overview: string;
    first_air_date: string;
  }[];
  isLoading: boolean;
  trending: {
    poster_path: string;
    id: number;
    name: string;
    backdrop_path: string;
  }[];
  ///
  // isOpen: boolean;
  topRated: { poster_path: string }[];
  action: { poster_path: string }[];
  comedy: { poster_path: string }[];
  horror: { poster_path: string }[];
  documentaries: { poster_path: string }[];
  romance: { poster_path: string }[];
}
