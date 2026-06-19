import Entity from "./Entity.js";

export default class Player extends Entity {
    constructor(x, y, speed) {
        super(x, y, speed); // Roept de constructor van Entity aan
    }
}