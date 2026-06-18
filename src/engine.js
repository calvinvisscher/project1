export class GameEngine {
    constructor() {
        this.gameState = {
            btcPrice: 50000
        };
    }

    // Update de markt (wordt elke tick aangeroepen)
    update() {
        const change = (Math.random() - 0.5) * 200;
        this.gameState.btcPrice += change;
        return this.gameState;
    }

    getLatestState() {
        return this.gameState;
    }
}
