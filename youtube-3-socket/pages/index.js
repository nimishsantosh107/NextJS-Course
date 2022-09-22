import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

let socket;
let messages = [];

const Home = () => {
    const [inputValue, setInputValue] = useState("");

    const initSocket = async () => {
        console.log("INITING");
        await fetch("/api/socket");

        socket = io();
        window.socket = socket;

        socket.on("recvMessage", (msg) => {
            messages.push(msg);
            console.log(messages);
        });
    };

    const sendMessage = () => {
        console.log(socket);
        socket.emit("newMessage", inputValue);
    };

    useEffect(() => {
        initSocket();
    }, []);

    return (
        <div>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
            <button onClick={sendMessage}>send</button>
        </div>
    );
};

export default Home;
