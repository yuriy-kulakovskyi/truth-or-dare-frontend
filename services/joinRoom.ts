import axios from 'axios';
import { toast } from 'react-hot-toast';

export const joinRoom = async (roomId: string, router: { push: (url: string) => void }) => {
  try {
    const response = await axios.get(process.env.NEXT_PUBLIC_SERVER_URL + `rooms/${roomId}`);

    if (response.data) {
      router.push(`/room/${roomId}`);
    }
  } catch (err: any) {
    if (err.response && err.response.status === 404) {
      toast.error("Room not found");
    } else {
      toast.error("An error occurred");
    }
    console.log(err);
  }
};