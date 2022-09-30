export interface StateTypes {
  heroMovie: {
    backdrop_path: string;
    name: string;
    overview: string;
    id: number;
    first_air_date: string;
  }[];

  // modalData: {
  //   backdrop_path: string;
  //   name: string;
  //   original_title: string;
  //   overview: string;
  //   vote_average: number;
  //   first_air_date: string;
  // };

  modalData: any;
  isLoading: boolean;

  trending: {
    poster_path: string;
    id: number;
    name: string;
    backdrop_path: string;
  }[];

  topRated: { poster_path: string; id: number }[];
  action: { poster_path: string; id: number }[];
  comedy: { poster_path: string; id: number }[];
  horror: { poster_path: string; id: number }[];
  documentaries: { poster_path: string; id: number }[];
  romance: { poster_path: string; id: number }[];
}

// export interface Modal {
//   backdrop_path: string;
//   name: string;
//   original_title: string;
//   overview: string;
//   vote_average: number;
//   first_air_date: string;
// }
