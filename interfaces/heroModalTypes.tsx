export interface HeroModalType {
  name: string | undefined;
  bg: string;
  // setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  overview: string;
  handlePlay: () => void;
  date: string;
  rating?: number;
}
