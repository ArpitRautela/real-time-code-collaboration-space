import React, { useState } from "react";
import Logo from "../assets/CodePair_Logo.png";
import { v4 as uuidV4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidV4();
    setRoomId(id);
    console.log(id);
    toast.success("Created a new room");
  };

  const joinRoom = () => {
    if (!roomId.trim() || !username.trim()) {
      toast.error("Room ID & Username are required");
      return;
    }
  
    navigate(`/editor/${roomId}`, {
      state: { username },
    });
  };
   

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-slate-900 to-slate-700">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-lg">
        <div className="flex justify-center">
          <img src={Logo} alt="Logo" className="h-24 w-auto" />
        </div>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label
              htmlFor="roomid"
              className="block text-sm font-medium text-gray-700"
            >
              Room ID
            </label>
            <input
              id="roomid"
              name="roomid"
              type="text"
              placeholder="Enter Room ID"
              onChange={(e) => setRoomId(e.target.value)}
              value={roomId}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter Username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
            />
          </div>
          <div>
            <button
              onClick={joinRoom}
              type="button"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Join
            </button>
          </div>
          <div className="mt-6">
            <p className="text-center">
              If you don't have an invite, create a{" "}
              <button
                onClick={createNewRoom}
                className="text-green-500 underline"
              >
                New Room
              </button>
              .
            </p>
          </div>
        </form>
      </div>
      <footer className="mt-4 text-white">
        <h4>
          Built By
          <a
            href="https://porfolio-arpit-rautelas-projects.vercel.app/"
            className="text-purple-300 underline ml-1"
          >
            Arpit Rautela
          </a>
        </h4>
      </footer>
    </div>
  );
};

export default Home;
