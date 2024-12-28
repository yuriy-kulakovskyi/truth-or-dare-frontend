export interface ISubscribe {
  key: string;
  cluster: string;
  setMessage: (message: string) => void;
  roomId: string;
}