"use client";

import { fetchInitialMessage } from '@/services/fetchInitialMessage';
import { sendDare } from '@/services/sendDare';
import { sendTruth } from '@/services/sendTruth';
import { setRoomIdF } from '@/services/setRoomId';
import { subscribe } from '@/services/subscribe';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface PageParams {
  roomId: string;
}

const Page = ({ params }: { params: Promise<PageParams> }) => {
  const [message, setMessage] = useState<string>("");
  const [roomId, setRoomId] = useState<string>("");

  const router = useRouter();
  const searchParams = useSearchParams();
  const urlRoomId = searchParams.get('roomId');

  const key: string = process.env.NEXT_PUBLIC_KEY || "";
  const cluster: string = process.env.NEXT_PUBLIC_CLUSTER || "";

  useEffect(() => {
    setRoomIdF(params, setRoomId);

    if (urlRoomId && urlRoomId !== roomId) {
      setRoomId(urlRoomId);
      subscribe({ key, cluster, setMessage, roomId: urlRoomId });
      fetchInitialMessage(roomId, setMessage, router);
    } else if (roomId) {
      subscribe({ key, cluster, setMessage, roomId });
      fetchInitialMessage(roomId, setMessage, router);
    }
  }, [params, key, cluster, urlRoomId, roomId]);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md space-y-6 text-center">
        <h1 className="text-2xl font-bold">Room {roomId}</h1>
        <p className="text-gray-600">{message}</p>

        <div className="flex justify-around space-x-4">
          <button
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-bg-400 focus:ring-offset-2"
            onClick={() => sendTruth(roomId)}
          >
            Truth
          </button>

          <button
            className="w-full bg-purple-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
            onClick={() => sendDare(roomId)}
          >
            Dare
          </button>
        </div>
      </div>
    </main>
  );
};

export default Page;