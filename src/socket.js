import { Server } from "socket.io";
import { GameEngine } from "./engine.js";

export function initializeSockets(httpServer) {
    const io = new Server(httpServer);
    const engine = new GameEngine();

    // De centrale Game Loop (Runt op de achtergrond van de server)
    // --- op dit moment nog altijd ook al is er niemand verbonden ---
    setInterval(() => {
        const updatedState = engine.update();
        io.emit("marketUpdate", updatedState); // Broadcast naar iedereen
    }, 500);

    io.on("connection", (socket) => {
        console.log(`🎮 Speler verbonden via WebSocket: ${socket.id}`);

        socket.on("buyStock", () => {
            const currentState = engine.getLatestState();
            console.log(
                `💰 Speler kocht op prijs: $${currentState.btcPrice.toFixed(2)}`,
            );
        });

        socket.on("disconnect", () => {
            console.log(`❌ Speler losgekoppeld: ${socket.id}`);
        });
    });

    return io;
}
