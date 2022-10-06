export interface ModalType {
  name: string | undefined;
  bg: string;
  id: number;
  overview: string;
  handlePlay: () => void;
  date: string;
  rating?: number;
  poster_path: string;
}
