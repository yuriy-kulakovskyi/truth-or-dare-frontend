import axios from "axios";

export const fetchInitialMessage = async (roomId: string, setMessage: (message: string) => void, router: {push: (url: string) => void}) => {
  try {    
    const response = await axios.get(process.env.NEXT_PUBLIC_SERVER_URL + `rooms/${roomId}`);
    response.data.message === "" 
      ? setMessage("Start the game by pressing buttons below") 
      : setMessage(response.data.message);
  } catch (error) {
    console.error('Error fetching initial message:', error);
    router.push('/');
  }
};