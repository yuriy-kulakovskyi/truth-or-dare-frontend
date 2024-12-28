import axios from 'axios';

export const sendTruth = async (id: string) => {
  try {
    const response = await axios.get("https://api.truthordarebot.xyz/v1/truth");
    await axios.post(process.env.NEXT_PUBLIC_SERVER_URL + "send/" + id, {
      message: response.data.question,
    });
  } catch (error) {
    console.error(error);
  }
};