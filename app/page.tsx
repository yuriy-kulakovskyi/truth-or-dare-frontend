"use client";

import { createRoom } from "@/services/createRoom";
import { joinRoom } from "@/services/joinRoom";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

const Home: React.FC = () => {
  const router = useRouter();
  const [roomId, setRoomId] = useState<string>("");

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <Toaster />
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md space-y-6">
        <button
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          onClick={() => createRoom(router)}
        >
          Create Room
        </button>

        <div className="flex items-center gap-4">
          <div className="h-1 w-full bg-gray-200"></div>
          <p>OR</p>
          <div className="h-1 w-full bg-gray-200"></div>
        </div>

        <input
          type="text"
          placeholder="Enter room id"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          className="w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-gray-700"
        />

        <button
          className="w-full bg-green-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
          onClick={() => joinRoom(roomId, router)}
        >
          Join Room
        </button>
      </div>
    </main>
  );
};

export default Home;