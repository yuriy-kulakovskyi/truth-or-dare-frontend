import axios from 'axios';

export const sendDare = async (id: string) => {
  try {
    const response = await axios.get("https://api.truthordarebot.xyz/v1/dare");
    await axios.post((process.env.NEXT_PUBLIC_SERVER_URL || "") + "send/" + id, {
      message: response.data.question
    });
  } catch (error) {
    console.error(error);
  }
};