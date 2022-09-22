import { Server } from "socket.io";

export default function handler(req, res) {
    if (res.socket.server.io) {
        console.log("[DEBUG]: socket already set up");
        res.end();
        return;
    }

    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
        socket.on("newMessage", (msg) => {
            socket.broadcast.emit("recvMessage", msg);
        });
    });

    console.log("Setting up socket");
    res.end();
}
