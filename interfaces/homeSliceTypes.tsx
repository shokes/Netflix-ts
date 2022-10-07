export interface StateTypes {
  heroMovie: {
    backdrop_path: string;
    name: string;
    overview: string;
    id: number;
    first_air_date: string;
    poster_path: string;
  }[];

  modalData: any;
  isLoading: boolean;

  trending: {
    poster_path: string;
    id: number;
    name: string;
    backdrop_path: string;
    release_date: string;
  }[];

  topRated: { poster_path: string; id: number }[];
  action: { poster_path: string; id: number }[];
  comedy: { poster_path: string; id: number }[];
  horror: { poster_path: string; id: number }[];
  documentaries: { poster_path: string; id: number }[];
  romance: { poster_path: string; id: number }[];
}
