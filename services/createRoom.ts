import axios from "axios"

interface IRouter {
  push: (url: string) => void;
}

export const createRoom = async (router: IRouter) => {
  const res = await axios.post((process.env.NEXT_PUBLIC_SERVER_URL || "") + "createRoom");
  const roomId: string = await res.data;
  router.push(`/room/${roomId}`);
}