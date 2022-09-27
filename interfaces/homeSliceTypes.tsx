export interface StateTypes {
  heroMovie: {
    backdrop_path: string;
    name: string;
    overview: string;
    id: number;
    first_air_date: string;
  }[];
  isLoading: boolean;
  modalData: {
    backdrop_path: string;
    name: string;
    original_title: string;
    overview: string;
    vote_average: number;
    first_air_date: string;
  };
  // modalData: any;
  trending: {
    poster_path: string;
    id: number;
    name: string;
    backdrop_path: string;
  }[];

  topRated: { poster_path: string }[];
  action: { poster_path: string }[];
  comedy: { poster_path: string }[];
  horror: { poster_path: string }[];
  documentaries: { poster_path: string }[];
  romance: { poster_path: string }[];
}

// export interface Modal {
//   backdrop_path: string;
//   name: string;
//   original_title: string;
//   overview: string;
//   vote_average: number;
//   first_air_date: string;
// }
