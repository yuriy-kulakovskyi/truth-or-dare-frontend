import { ISubscribe } from '@/interfaces/ISubsdcribe';
import Pusher from 'pusher-js';

export const subscribe = async (subscriber: ISubscribe) => {
  const pusher = new Pusher(subscriber.key, {
    cluster: subscriber.cluster,
  });

  const channel = pusher.subscribe('my-channel');
  channel.bind(subscriber.roomId, (data: {message: string}) => {
    subscriber.setMessage(data.message);
  });

  return () => {
    channel.unbind_all();
    channel.unsubscribe();
  };
}